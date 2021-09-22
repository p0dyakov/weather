// ====================================================
// IMPORTS
// Main
import axios from 'axios'

// ====================================================
// Instance

const api = {
	key: 'key',
	base: 'https://api.openweathermap.org/data/2.5/',
}

// ====================================================
// Requests

export const weatherAPI = {
	getWeatherAPI: sco => {
		return axios
			.get(
				`${api.base}weather?lat=${sco.lat}&lon=${sco.lon}&units=metric&APPID=${api.key}`
			)
			.catch(error => {
				if (error.response) {
					return error.response.data
				}
			})
	},
	getForecastAPI: (sco, days) => {
		return axios
			.get(
				`${api.base}forecast/daily?lat=${sco.lat}&lon=${sco.lon}&cnt=${days}&units=metric&APPID=${api.key}`
			)
			.catch(error => {
				if (error.response) {
					return error.response.data
				}
			})
	},
	getWeatherWithCityAPI: city => {
		return axios
			.get(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
			.catch(error => {
				if (error.response) {
					return error.response.data
				}
			})
	},
	getForecastWithCityAPI: (city, days) => {
		return axios
			.get(
				`${api.base}forecast/daily?q=${city}&cnt=${days}&units=metric&APPID=${api.key}`
			)
			.catch(error => {
				if (error.response) {
					return error.response.data
				}
			})
	},
}
