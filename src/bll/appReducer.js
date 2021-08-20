// ====================================================
// IMPORTS
// Main

import { positionAPI } from '../api/positionAPI'
import { days, months } from '../variables/dateVars'

// ====================================================
// Types

const SET_POSITION = 'SET_POSITION'
const SET_DATE = 'SET_DATE'

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

		default:
			return state
	}
}

// ====================================================
// Action creators

export const setPositionSuccess = payload => ({ type: SET_POSITION, payload })
export const setDateSuccess = payload => ({ type: SET_DATE, payload })

// ====================================================
// Thunks

export const getPosition = () => {
	return async dispatch => {
		navigator.geolocation.getCurrentPosition(function (position) {
			let sco = `${position.coords.longitude},${position.coords.latitude}`
			positionAPI.getAddress(sco).then(response => {
				let country =
					response.data.response.GeoObjectCollection.featureMember[0].GeoObject
						.metaDataProperty.GeocoderMetaData.Address.Components[0].name

				let region =
					response.data.response.GeoObjectCollection.featureMember[0].GeoObject
						.metaDataProperty.GeocoderMetaData.Address.Components[2].name

				let sity =
					response.data.response.GeoObjectCollection.featureMember[0].GeoObject
						.metaDataProperty.GeocoderMetaData.Address.Components[4].name

				let address = { country, region, sity }
				dispatch(setPositionSuccess(address))
			})
		})
	}
}
export const getDate = () => {
	return async dispatch => {
		let d = new Date()

		let day = days[d.getDay()]
		let date = d.getDate()
		let month = months[d.getMonth()]
		let year = d.getFullYear()

		dispatch(setDateSuccess({ year, month, date, day }))
	}
}
export const initilize = () => {
	return async dispatch => {
await
	}
}
// ====================================================
// Exports

export default appReducer
