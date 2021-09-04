// ====================================================
// IMPORTS
// Main
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { selectWeatherIcon } from '../../../../functions/selectWeatherIcon'
import { colours } from '../../../../variables/coloursVars'
import styles from './card.module.scss'

// ====================================================
// Component

const style = {
	body: {
		background: `${colours.background}`,
	},
}

const Card = props => {
	let [pathToImage, setPathToImage] = useState('')

	useEffect(() => {
		let path =
			'/' + selectWeatherIcon(props.weather.weather[0].icon, 'whiteTheme')
		setPathToImage((pathToImage = path))
	}, [])
	return (
		<NavLink to={`/weather/${props.id}/${props.day}`}>
			<div className={styles.body}>
				<p className={styles.temp}>{Math.round(props.weather.temp.day)}°c</p>
				<p className={styles.day}>{props.day}</p>
				<div className={styles.image}>
					<img src={`${pathToImage}`} />
				</div>
			</div>
		</NavLink>
	)
}

// ====================================================
// Exports

export default Card
