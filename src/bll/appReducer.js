// ====================================================
// IMPORTS
// Main

import { positionAPI } from '../api/positionAPI'
import { weatherAPI } from '../api/weatherAPI'
import { days, months } from '../variables/dateVars'
import { getForecast, getWeather, setWeatherSuccess } from './weatherReducer'

// ====================================================
// Types

const SET_POSITION = 'SET_POSITION'
const SET_DATE = 'SET_DATE'
const SET_SEARCHING = 'SET_SEARCHING'
const SET_INITIALIZED = 'SET_INITIALIZED'
const SET_SCO = 'SET_SCO'
const SET_CITY = 'SET_CITY'

// ====================================================
// Initial state

let initialState = {
	position: {
		address: {},
		sco: {
			lon: null,
			lat: null,
		},
		city: null,
	},
	date: {
		year: null,
		month: null,
		day: null,
	},
	initialized: false,
	searching: false,
}

// ====================================================
// Reducer

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_POSITION:
			return {
				...state,
				position: {
					...state.position,
					...action.payload,
				},
			}

		case SET_DATE:
			return {
				...state,
				date: {
					...action.payload,
				},
			}

		case SET_INITIALIZED:
			return {
				...state,
				initialized: action.payload,
			}

		case SET_SEARCHING:
			return {
				...state,
				searching: action.payload,
			}

		case SET_SCO:
			return {
				...state,
				position: {
					...state.position,
					sco: {
						lon: action.payload.lon,
						lat: action.payload.lat,
					},
				},
			}
		case SET_CITY:
			return {
				...state,
				position: {
					...state.position,

					city: action.payload,
				},
			}

		default:
			return state
	}
}

// ====================================================
// Action creators

export const setPositionSuccess = payload => ({ type: SET_POSITION, payload })
export const setDateSuccess = payload => ({ type: SET_DATE, payload })
export const setSco = payload => ({ type: SET_SCO, payload })
export const setCity = payload => ({ type: SET_CITY, payload })
export const setInitialized = payload => ({ type: SET_INITIALIZED, payload })
export const setSearching = payload => ({ type: SET_SEARCHING, payload })

// ====================================================
// Thunks

export const getPosition = (resolve, city = null) => {
	return async dispatch => {
		navigator.geolocation.getCurrentPosition(function (position) {
			let scoForApi
			let positionForApi
			if (!city) {
				positionForApi = `${position.coords.longitude},${position.coords.latitude}`
				scoForApi = {
					lon: position.coords.longitude,
					lat: position.coords.latitude,
				}
			} else {
				positionForApi = city
			}
			positionAPI
				.getAddress(positionForApi)
				.then(response => {
					let address =
						response.data.response.GeoObjectCollection.featureMember[0]
							.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components

					return { address }
				})
				.then(address => {
					dispatch(setPositionSuccess(address))
				})
				.then(() => {
					if (resolve && scoForApi) {
						resolve(dispatch(setSco(scoForApi)))
					} else if (scoForApi) {
						dispatch(setSco(scoForApi))
					} else {
						resolve()
					}
				})
		})
	}
}

export const getDate = resolve => {
	return async dispatch => {
		let d = new Date()

		let day = days[d.getDay()]
		let date = d.getDate()
		let month = months[d.getMonth()]
		let year = d.getFullYear()

		if (resolve) {
			resolve(dispatch(setDateSuccess({ year, month, date, day })))
		} else {
			dispatch(setDateSuccess({ year, month, date, day }))
		}
	}
}

export const getInf = (city = null) => {
	return async dispatch => {
		new Promise((resolve, reject) => {
			dispatch(getPosition(resolve, city))
		})
			.then(() => {
				return new Promise((resolve, reject) => {
					dispatch(getWeather(resolve, city))
				})
			})
			.then(() => {
				return new Promise((resolve, reject) => {
					dispatch(getForecast(resolve, 16, city))
				})
			})

			.then(() => {
				return new Promise((resolve, reject) => {
					dispatch(getDate(resolve))
				})
			})
			.then(() => {
				dispatch(setSearching(false))
				dispatch(setInitialized(true))
			})
	}
}

// ====================================================
// Exports

export default appReducer
