// ====================================================
// IMPORTS
// Main

import { weatherAPI } from '../api/weatherAPI'

// ====================================================
// Types

const SET_WEATHER = 'SET_WEATHER'

// ====================================================
// Initial state

let initialState = {
	coord: {
		lon: null,
		lat: null,
	},
	weather: [
		{
			id: null,
			main: null,
			description: null,
			icon: null,
		},
	],
	base: null,
	main: {
		temp: null,
		feels_like: null,
		temp_min: null,
		temp_max: null,
		pressure: null,
		humidity: null,
	},
	visibility: null,
	wind: {
		speed: null,
		deg: null,
	},
	clouds: {
		all: null,
	},
	dt: null,
	sys: {
		type: null,
		id: null,
		country: null,
		sunrise: null,
		sunset: null,
	},
	timezone: null,
	id: null,
	name: null,
	cod: null,
}

// ====================================================
// Reducer

const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_WEATHER:
			return {
				...state,
				...action.payload,
			}

		default:
			return state
	}
}

// ====================================================
// Action creators

export const setWeatherSuccess = payload => ({ type: SET_WEATHER, payload })

// ====================================================
// Thunks

export const getWeather = () => {
	return async (dispatch, getState) => {
		let state = getState()
		console.log(state)
		// weatherAPI.getWeatherAPI()
	}
}

// ====================================================
// Exports

export default weatherReducer
