// ====================================================
// IMPORTS
// Main
import axios from 'axios'

// ====================================================
// Instance

const api = {
	key: 'a8700d82e68863eb5378e8d374c9332d',
	base: 'https://api.openweathermap.org/data/2.5/',
}

// ====================================================
// Requests

export const weatherAPI = {
	getWeatherAPI: city => {
		return axios.get(
			`${api.base}weather?q=${city ? city : 'London'}&units=metric&APPID=${
				api.key
			}`
		)
	},
}
