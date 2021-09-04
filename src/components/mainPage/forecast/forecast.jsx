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

let nextDay = 1
let dayId = 0
const Forecast = props => {
	let [day, setDay] = useState(null)
	useEffect(() => {
		setDay((day = days.indexOf(props.day, 0)))
		nextDay = day
	}, [])

	const settings = {
		arrows: false,
		infinite: false,
		speed: 400,
		slidesToShow: 6,
		slidesToScroll: 2,
		dots: true,
	}
	return (
		<div className={styles.body}>
			<Slider {...settings}>
				{props.forecast.map(weather => {
					if (nextDay === 7) {
						nextDay = 1
					} else {
						nextDay += 1
					}
					if (dayId === 16) {
						dayId = 1
					} else {
						dayId += 1
					}
					return (
						<div key={weather.id}>
							<Card weather={weather} day={days[nextDay - 1]} id={dayId} />
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
