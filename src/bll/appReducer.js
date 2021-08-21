// ====================================================
// IMPORTS
// Main

import { positionAPI } from '../api/positionAPI'
import { days, months } from '../variables/dateVars'
import { getWeather } from './weatherReducer'

// ====================================================
// Types

const SET_POSITION = 'SET_POSITION'
const SET_DATE = 'SET_DATE'
const SET_INITIALIZED = 'SET_INITIALIZED'

// ====================================================
// Initial state

let initialState = {
	position: {
		country: null,
		region: null,
		sity: null,
	},
	date: {
		year: null,
		month: null,
		day: null,
	},
	initialized: false,
}

// ====================================================
// Reducer

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_POSITION:
			return {
				...state,
				position: {
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

		default:
			return state
	}
}

// ====================================================
// Action creators

export const setPositionSuccess = payload => ({ type: SET_POSITION, payload })
export const setDateSuccess = payload => ({ type: SET_DATE, payload })
export const setInitialized = payload => ({ type: SET_INITIALIZED, payload })

// ====================================================
// Thunks

export const getPosition = resolve => {
	return async dispatch => {
		navigator.geolocation.getCurrentPosition(function (position) {
			let sco = `${position.coords.longitude},${position.coords.latitude}`
			positionAPI
				.getAddress(sco)
				.then(response => {
					let country =
						response.data.response.GeoObjectCollection.featureMember[0]
							.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components[0]
							.name

					let region =
						response.data.response.GeoObjectCollection.featureMember[0]
							.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components[2]
							.name

					let sity =
						response.data.response.GeoObjectCollection.featureMember[0]
							.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components[4]
							.name

					return { country, region, sity }
				})
				.then(address => {
					resolve(dispatch(setPositionSuccess(address)))
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

		resolve(dispatch(setDateSuccess({ year, month, date, day })))
	}
}
export const initialize = () => {
	return async dispatch => {
		new Promise(function (resolve, reject) {
			dispatch(getPosition(resolve))
		})
			.then(
				new Promise(function (resolve, reject) {
					dispatch(getWeather(resolve))
				})
			)
			.then(() => {
				new Promise(function (resolve, reject) {
					dispatch(getDate(resolve))
				})
			})
			.then(() => {
				dispatch(setInitialized(true))
			})
	}
}

// ====================================================
// Exports

export default appReducer
