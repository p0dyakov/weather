// ====================================================
// IMPORTS
// Main
import { useEffect, useState } from 'react'
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
		<div className={styles.body}>
			<p>{props.weather.temp.day}°c</p>
			<p>{props.day}</p>
			<div className={styles.image}>
				<img src={`${pathToImage}`} />
			</div>
		</div>
	)
}

// ====================================================
// Exports

export default Card
