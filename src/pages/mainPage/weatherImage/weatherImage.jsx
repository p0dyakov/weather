// ====================================================
// IMPORTS
import styles from './weatherImage.module.scss'
import { selectWeatherIcon } from '../../../utils/selectWeatherIcon'
import * as queryString from 'querystring'
import { useHistory } from 'react-router'
import { useEffect, useState } from 'react'
import React from 'react'

// ====================================================
// Component

const WeatherImage = props => {
	// Variables
	let history = useHistory()
	let path
	let [parsedUrl, setParsedUrl] = useState(
		queryString.parse(history.location.search.substr(1))
	)

	// ====================================================
	// Side effects
	useEffect(() => {
		setParsedUrl(queryString.parse(history.location.search.substr(1)))
	}, [props.location.search])

	// ====================================================
	// Logic
	if (+parsedUrl.day == 0) {
		path = require('../../../images' + selectWeatherIcon(props.icon))
	} else {
		path = require('../../../images' +
			selectWeatherIcon(props.list[+parsedUrl.day - 1].weather[0].icon))
	}

	// ====================================================
	// JSX
	return (
		<div className={styles.body}>
			<div className={styles.image}>
				<img src={`${path.default}`} />
			</div>
		</div>
	)
}

// ====================================================
// Exports

export default React.memo(WeatherImage)
