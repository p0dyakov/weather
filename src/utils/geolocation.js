//Get latitude and longitude;
const successFunction = position => {
	let lat = position.coords.latitude
	let long = position.coords.longitude

	localStorage['authorizedGeoLocation'] = 1
}
const errorFunction = () => {
	localStorage['authorizedGeoLocation'] = 0
}

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(successFunction, errorFunction)
}

export const checkauthorizedGeoLocation = () => {
	// you can use this function to know if geoLocation was previously allowed
	if (
		typeof localStorage['authorizedGeoLocation'] == 'undefined' ||
		localStorage['authorizedGeoLocation'] == '0'
	)
		return false
	else return true
}
