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
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2,
					dots: false,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					dots: false,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 510,
				settings: {
					slidesToShow: 2,
					dots: false,
					slidesToScroll: 1,
				},
			},
		],
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
