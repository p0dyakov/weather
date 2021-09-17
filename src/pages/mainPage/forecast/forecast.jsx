// ====================================================
// IMPORTS
// Main
import styles from './forecast.module.scss'
import Card from './card/card'
import Slider from 'react-slick'
import { useEffect } from 'react'
import { days } from '../../../variables/dateVars'
import { useState } from 'react'
import { useRef } from 'react'

// ====================================================
// Component

const Forecast = props => {
	const nextDay = useRef(null)
	const dayId = useRef(null)

	useEffect(() => {
		nextDay.current = days.indexOf(props.day, 0) + 1
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
				breakpoint: 417,
				settings: {
					slidesToShow: 3,
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
					if (nextDay.current === 7) {
						nextDay.current = 1
					} else {
						nextDay.current += 1
					}

					if (dayId.current === 16) {
						dayId.current = 1
					} else {
						dayId.current += 1
					}
					return (
						<div key={weather.id}>
							<Card
								weather={weather}
								day={days[nextDay.current - 1]}
								id={dayId.current}
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
