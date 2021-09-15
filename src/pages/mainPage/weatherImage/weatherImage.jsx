// ====================================================
// IMPORTS
// Main
import styles from './weatherImage.module.scss'
import { selectWeatherIcon } from '../../../functions/selectWeatherIcon'
import * as queryString from 'querystring'
import { useHistory } from 'react-router'
import { useEffect, useState } from 'react'

// ====================================================
// Component

const WeatherImage = props => {
	let history = useHistory()
	let path
	let [parsedUrl, setParsedUrl] = useState(
		queryString.parse(history.location.search.substr(1))
	)

	useEffect(() => {
		setParsedUrl(queryString.parse(history.location.search.substr(1)))
	}, [props.location.search])

	if (+parsedUrl.day == 0) {
		path = '/' + selectWeatherIcon(props.icon, 'whiteTheme')
	} else {
		path =
			'/' +
			selectWeatherIcon(
				props.list[+parsedUrl.day - 1].weather[0].icon,
				'whiteTheme'
			)
	}

	return (
		<div className={styles.body}>
			<div className={styles.image}>
				<img src={`${path}`} />
			</div>
		</div>
	)
}

// ====================================================
// Exports

export default WeatherImage
