// ====================================================
// IMPORTS
// Main
import { weatherAPI } from '../api/weatherAPI'

// ====================================================
// Types

const SET_WEATHER = 'SET_WEATHER'
const SET_FORECAST = 'SET_FORECAST'
const SET_ERROR = 'SET_ERROR'

// ====================================================
// Initial state

let initialState = {
	today: {},
	forecast: {},
}

// ====================================================
// Reducer

const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_WEATHER:
			return {
				...state,
				today: { ...action.payload },
			}

		case SET_FORECAST:
			return {
				...state,
				forecast: {
					...action.payload,
				},
			}

		default:
			return state
	}
}

// ====================================================
// Action creators

export const setWeatherSuccess = payload => ({ type: SET_WEATHER, payload })
export const setForecastSuccess = payload => ({
	type: SET_FORECAST,
	payload,
})

// ====================================================
// Thunks

export const getWeather = (resolve, city = null) => {
	return async (dispatch, getState) => {
		const state = getState()
		const success = response => {
			if (resolve) {
				resolve(dispatch(setWeatherSuccess(response.data)))
			} else {
				dispatch(setWeatherSuccess(response.data))
			}
		}

		if (city) {
			weatherAPI.getWeatherWithCityAPI(city).then(response => {
				success(response)
			})
		} else if (state.app.position.sco.lat) {
			weatherAPI.getWeatherAPI(state.app.position.sco).then(response => {
				success(response)
			})
		} else {
			success({})
		}
	}
}

export const getForecast = (resolve, days, city = null) => {
	return async (dispatch, getState) => {
		const state = getState()
		const success = response => {
			if (resolve) {
				resolve(dispatch(setForecastSuccess(response.data)))
			} else {
				dispatch(setForecastSuccess(response.data))
			}
		}

		if (city) {
			weatherAPI.getForecastWithCityAPI(city, days).then(response => {
				success(response)
			})
		} else if (state.app.position.sco.lat) {
			weatherAPI.getForecastAPI(state.app.position.sco, days).then(response => {
				success(response)
			})
		} else {
			success({})
		}
	}
}

// ====================================================
// Exports

export default weatherReducer
