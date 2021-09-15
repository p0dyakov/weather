// ====================================================
// IMPORTS
// Main
import { NavLink } from 'react-router-dom'
import { selectWeatherIcon } from '../../../../functions/selectWeatherIcon'
import { colours } from '../../../../variables/coloursVars'
import styles from './card.module.scss'
import * as queryString from 'querystring'
import { useHistory } from 'react-router'

// ====================================================
// Component

const style = {
	body: {
		background: `${colours.background}`,
	},
}

const Card = props => {
	const history = useHistory()
	let parsedUrl = queryString.parse(history.location.search.substr(1))

	console.log()
	let path =
		'/' + selectWeatherIcon(props.weather.weather[0].icon, 'whiteTheme')

	return (
		<NavLink to={`/?day=${props.id}&city=${parsedUrl.city}`}>
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
