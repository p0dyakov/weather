// ====================================================
// IMPORTS
// Main
import { NavLink } from 'react-router-dom'
import { selectWeatherIcon } from '../../../../utils/selectWeatherIcon'
import styles from './card.module.scss'
import * as queryString from 'querystring'
import { useHistory } from 'react-router'
import React from 'react'

// ====================================================
// Component

const Card = props => {
	// Variables
	const history = useHistory()
	const parsedUrl = queryString.parse(history.location.search.substr(1))
	const path = require('../../../../images' +
		selectWeatherIcon(props.weather.weather[0].icon))

	// ====================================================
	// JSX
	return (
		<NavLink
			to={`?day=${props.id}${parsedUrl.city ? '&city=' + parsedUrl.city : ''}`}
		>
			<div className={styles.body}>
				<p className={styles.temp}>{Math.round(props.weather.temp.day)}°c</p>
				<p className={styles.date}>
					{props.day}, {props.date}
				</p>
				<div className={styles.image}>
					<img src={path.default} />
				</div>
			</div>
		</NavLink>
	)
}

// ====================================================
// Exports

export default React.memo(Card)
