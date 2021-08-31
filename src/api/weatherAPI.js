// ====================================================
// IMPORTS
// Main
import axios from 'axios'

// ====================================================
// Instance

const api = {
	key: 'c0c4a4b4047b97ebc5948ac9c48c0559',
	myKey: 'a8700d82e68863eb5378e8d374c9332d',
	base: 'https://api.openweathermap.org/data/2.5/',
}

// ====================================================
// Requests

export const weatherAPI = {
	getWeatherAPI: scoForApi => {
		return axios.get(
			`${api.base}weather?lat=${scoForApi.lat}&lon=${scoForApi.lon}&units=metric&APPID=${api.key}`
		)
	},
	// getForecastForSevenDaysAPI: city => {
	// 	return axios.get(
	// 		`forecast/daily?q=${city}&units=metric&cnt=7&lang=en&appid=${api.key}`
	// 	)
	// },
}
