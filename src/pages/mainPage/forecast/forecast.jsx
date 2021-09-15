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
	const weather = {
		temp: {
			day: props.weatherToday.main.temp,
		},
		weather: [{ icon: props.weatherToday.weather[0].icon }],
	}
	return (
		<div className={styles.body}>
			<Slider {...settings}>
				<div>
					<Card
						weather={weather}
						day={'Today'}
						id={0}
						address={props.address}
					/>
				</div>

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
							<Card
								weather={weather}
								day={'?'}
								id={dayId}
								address={props.address}
							/>
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
