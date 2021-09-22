// ====================================================
// IMPORTS
// Main
import axios from 'axios'

// ====================================================
// Instance

const api = {
	key: 'key',
	base: 'https://geocode-maps.yandex.ru/1.x/',
}

// ====================================================
// Requests

export const positionAPI = {
	getAddress: position => {
		return axios.get(
			`${api.base}?apikey=${api.key}&geocode=${position}&format=json&lang=en_US`
		)
	},
}
