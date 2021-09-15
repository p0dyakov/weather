// ====================================================
// IMPORTS
// Main
import axios from 'axios'

// ====================================================
// Instance

const api = {
	key: 'c0c4a4b4047b97ebc5948ac9c48c0559',
	key2: '08dbab0eeefe53317d2e0ad7c2a2e060',
	myKey: 'a8700d82e68863eb5378e8d374c9332d',
	base: 'https://api.openweathermap.org/data/2.5/',
}

// ====================================================
// Requests

export const weatherAPI = {
	getWeatherAPI: sco => {
		return axios.get(
			`${api.base}weather?lat=${sco.lat}&lon=${sco.lon}&units=metric&APPID=${api.key2}`
		)
	},
	getForecastAPI: (sco, days) => {
		return axios.get(
			`${api.base}forecast/daily?lat=${sco.lat}&lon=${sco.lon}&cnt=${days}&units=metric&APPID=${api.key2}`
		)
	},
	getWeatherWithCityAPI: city => {
		return axios.get(
			`${api.base}weather?q=${city}&units=metric&APPID=${api.key2}`
		)
	},
	getForecastWithCityAPI: (city, days) => {
		return axios.get(
			`${api.base}forecast/daily?q=${city}&cnt=${days}&units=metric&APPID=${api.key2}`
		)
	},
}
