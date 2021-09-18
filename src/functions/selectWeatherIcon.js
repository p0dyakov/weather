export const selectWeatherIcon = icon => {
	switch (icon) {
		case '01d':
			return `../images/day/sunset.png`

		case '02d':
			return `../images/day/warm-weather.png`

		case '03d':
			return `../images/common/cloud.png`

		case '04d':
			return `../images/common/clouds.png`

		case '09d':
			return `../images/common/rain.png`

		case '10d':
			return `../images/day/cloud-drizzel.png`

		case '11d':
			return `../images/common/storm-weather.png`

		case '13d':
			return `../images/common/snow.png`

		case '50d':
			return `../images/common/mist.png`

		case '01n':
			return `../images/night/moon.png`

		case '02n':
			return `../images/night/moon-clouds.png`

		case '03n':
			return `../images/common/cloud.png`

		case '04n':
			return `../images/common/clouds.png`

		case '09n':
			return `../images/common/rain.png`

		case '10n':
			return `../images/night/rainy-weather.png`

		case '11n':
			return `../images/common/storm-weather.png`

		case '13n':
			return `../images/common/snow.png`

		case '50n':
			return `../images/common/mist.png`

		default:
			return 'icon not defined'
	}
}
