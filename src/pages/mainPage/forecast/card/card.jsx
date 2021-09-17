// ====================================================
// IMPORTS
// Main
import { NavLink } from 'react-router-dom'
import { selectWeatherIcon } from '../../../../functions/selectWeatherIcon'
import { setActiveDay } from '../../../../bll/appReducer'
import { colours } from '../../../../variables/coloursVars'
import styles from './card.module.scss'
import * as queryString from 'querystring'
import { useHistory } from 'react-router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

// ====================================================
// Component

const style = {
	body: {
		background: `${colours.background}`,
	},
}

const Card = props => {
	const history = useHistory()
	const dispatch = useDispatch()
	let parsedUrl = queryString.parse(history.location.search.substr(1))

	let path =
		'/' + selectWeatherIcon(props.weather.weather[0].icon, 'whiteTheme')

	return (
		<NavLink
			to={`/?day=${props.id}${parsedUrl.city ? '&city=' + parsedUrl.city : ''}`}
			onClick={() => {
				dispatch(setActiveDay(props.day))
			}}
		>
			<div className={styles.body}>
				<p className={styles.temp}>{Math.round(props.weather.temp.day)}°c</p>
				<p className={styles.day}>{props.day}</p>
				<div className={styles.image}>
					<img src={`${path}`} />
				</div>
			</div>
		</NavLink>
	)
}

// ====================================================
// Exports

export default Card
