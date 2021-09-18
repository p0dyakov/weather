// ====================================================
// IMPORTS
// Main
import { weatherAPI } from '../api/weatherAPI'

// ====================================================
// Types

const SET_WEATHER = 'SET_WEATHER'
const SET_FORECAST = 'SET_FORECAST'

// ====================================================
// Initial state

let initialState = {
	today: {
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
	},
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

		city
			? weatherAPI.getWeatherWithCityAPI(city).then(response => {
					success(response)
			  })
			: weatherAPI.getWeatherAPI(state.app.position.sco).then(response => {
					success(response)
			  })
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

		city
			? weatherAPI.getForecastWithCityAPI(city, days).then(response => {
					success(response)
			  })
			: weatherAPI
					.getForecastAPI(state.app.position.sco, days)
					.then(response => {
						success(response)
					})
	}
}

// ====================================================
// Exports

export default weatherReducer
