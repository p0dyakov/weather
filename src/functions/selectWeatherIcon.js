export const selectWeatherIcon = (icon, theme) => {
	switch (icon) {
		case '01d':
			return `../images/${theme}/day/sunset.png`

		case '02d':
			return `../images/${theme}/day/warm-weather.png`

		case '03d':
			return `../images/${theme}/common/cloud.png`

		case '04d':
			return `../images/${theme}/common/clouds.png`

		case '09d':
			return `../images/${theme}/common/rain.png`

		case '10d':
			return `../images/${theme}/day/cloud-drizzel.png`

		case '11d':
			return `../images/${theme}/common/storm-weather.png`

		case '13d':
			return `../images/${theme}/common/snow.png`

		case '50d':
			return `../images/${theme}/common/mist.png`

		case '01n':
			return `../images/${theme}/night/moon.png`

		case '02n':
			return `../images/${theme}/night/moon-clouds.png`

		case '03n':
			return `../images/${theme}/common/cloud.png`

		case '04n':
			return `../images/${theme}/common/clouds.png`

		case '09n':
			return `../images/${theme}/common/rain.png`

		case '10n':
			return `../images/${theme}/night/rainy-weather.png`

		case '11n':
			return `../images/${theme}/common/storm-weather.png`

		case '13n':
			return `../images/${theme}/common/snow.png`

		case '50n':
			return `../images/${theme}/common/mist.png`

		default:
			return 'icon not defined'
	}
}
