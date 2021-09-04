// ====================================================
// IMPORTS
// Main
import styles from './weatherImage.module.scss'
import { selectWeatherIcon } from '../../../functions/selectWeatherIcon'
import { useEffect } from 'react'
import { useState } from 'react'

// ====================================================
// Component

const WeatherImage = props => {
	let [pathToImage, setPathToImage] = useState('')

	useEffect(() => {
		let path
		if (props.match.params.day == 0) {
			path = '/' + selectWeatherIcon(props.icon, 'whiteTheme')
		} else {
			path =
				'/' +
				selectWeatherIcon(
					props.list[props.match.params.day - 1].weather[0].icon,
					'whiteTheme'
				)
		}
		setPathToImage((pathToImage = path))
	}, [])

	return (
		<div className={styles.body}>
			<div className={styles.image}>
				<img src={`${pathToImage}`} />
			</div>
		</div>
	)
}

// ====================================================
// Exports

export default WeatherImage
