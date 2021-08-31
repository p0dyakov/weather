// ====================================================
// IMPORTS
// Main
import styles from './weatherImage.module.scss'
import { selectWeatherIcon } from '../../../functions/selectWeatherIcon'
import { useEffect } from 'react'
import { useState } from 'react'

// ====================================================
// Component

// const style = {
// 	image: {
// 		backgroundImage: ``,
// 	},
// }
const WeatherImage = props => {
	let [pathToImage, setPathToImage] = useState('')

	useEffect(() => {
		let path = '/' + selectWeatherIcon(props.icon, 'whiteTheme')
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
