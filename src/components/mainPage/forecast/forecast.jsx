// ====================================================
// IMPORTS
// Main
import styles from './forecast.module.scss'
import Card from './card/card'
import Slider from 'react-slick'
import { useEffect } from 'react'
import { days } from '../../../variables/dateVars'
import { useState } from 'react'

// ====================================================
// Component

let nextDay = 0
const Forecast = props => {
	let [day, setDay] = useState(null)
	useEffect(() => {
		setDay((day = days.indexOf(props.day, 0)))
		nextDay = day
	}, [])

	const settings = {
		infinite: false,
		speed: 300,
		slidesToShow: 6,
		slidesToScroll: 2,
		dots: true,
	}
	return (
		<div className={styles.body}>
			<Slider {...settings}>
				{props.forecast.map(weather => {
					nextDay += 1
					return (
						<div key={weather.id}>
							<Card weather={weather} day={days[nextDay]} />
						</div>
					)
				})}
			</Slider>
		</div>
	)
}

// ====================================================
// Exports

export default Forecast
