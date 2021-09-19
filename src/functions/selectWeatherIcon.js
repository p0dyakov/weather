export const selectWeatherIcon = icon => {
	switch (icon) {
		case '01d':
			return `/day/sunset.png`

		case '02d':
			return `/day/warm-weather.png`

		case '03d':
			return `/common/cloud.png`

		case '04d':
			return `/common/clouds.png`

		case '09d':
			return `/common/rain.png`

		case '10d':
			return `/day/cloud-drizzel.png`

		case '11d':
			return `/common/storm-weather.png`

		case '13d':
			return `/common/snow.png`

		case '50d':
			return `/common/mist.png`

		case '01n':
			return `/night/moon.png`

		case '02n':
			return `/night/moon-clouds.png`

		case '03n':
			return `/common/cloud.png`

		case '04n':
			return `/common/clouds.png`

		case '09n':
			return `/common/rain.png`

		case '10n':
			return `/night/rainy-weather.png`

		case '11n':
			return `/common/storm-weather.png`

		case '13n':
			return `/common/snow.png`

		case '50n':
			return `/common/mist.png`

		default:
			return 'icon not defined'
	}
}
