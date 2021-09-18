// ====================================================
// IMPORTS
import styles from './forecast.module.scss'
import Card from './card/card'
import Slider from 'react-slick'
import { days } from '../../../variables/dateVars'
import { useRef } from 'react'
import React from 'react'

// ====================================================
// Component

const sliderSettings = {
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

const Forecast = props => {
	// Variables
	const nextDay = useRef(null)
	const nextDate = useRef(null)
	const dayId = useRef(null)
	const wasFirstRender = useRef(false)
	const propsForFirstCard = {
		temp: {
			day: props.weatherToday.main.temp,
		},
		weather: [{ icon: props.weatherToday.weather[0].icon }],
	}

	// ====================================================
	// JSX
	return (
		<div className={styles.body}>
			<Slider {...sliderSettings}>
				<div>
					<Card
						weather={propsForFirstCard}
						day={'Today'}
						id={0}
						address={props.address}
						date={props.date.date}
					/>
				</div>

				{props.forecast.map(weather => {
					if (!wasFirstRender.current) {
						wasFirstRender.current = true
						nextDay.current = days.indexOf(props.date.day, 0) + 1
						nextDate.current = props.date.date + 1
					} else {
						nextDay.current += 1

						if (nextDate.current + 1 <= props.date.daysInMonth) {
							nextDate.current += 1
						} else {
							nextDate.current = nextDate.current + 1 - props.date.daysInMonth
						}
					}
					if (nextDay.current === 7) {
						nextDay.current = 0
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
								day={days[nextDay.current]}
								id={dayId.current}
								address={props.address}
								date={nextDate.current}
								key={nextDate.current}
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

export default React.memo(Forecast)
