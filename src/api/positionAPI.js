// ====================================================
// IMPORTS
// Main
import axios from 'axios'

// ====================================================
// Instance

const api = {
	key: '62b0fa46-9e4d-4636-86e2-cb60bac2b943',
	base: 'https://geocode-maps.yandex.ru/1.x/',
}

// ====================================================
// Requests

export const positionAPI = {
	getAddress: longlat => {
		return axios.get(
			`${api.base}?apikey=${api.key}&geocode=${longlat}&format=json&lang=en_US`
		)
	},
}
