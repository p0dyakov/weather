// ====================================================
// IMPORTS
// Main
import React, { useEffect, useState } from 'react'
import Card from './card/card'
import styles from './mainInfo.module.scss'
import * as queryString from 'querystring'
import { useHistory } from 'react-router'
import { useRef } from 'react'
import { days, months } from '../../../variables/dateVars'

// ====================================================
// Component

const MainInfo = props => {
	// Variables
	const history = useHistory()
	let [parsedUrl, setParsedUrl] = useState(
		queryString.parse(history.location.search.substr(1))
	)
	let [isToday, setIsToday] = useState(true)
	let currentDay = useRef(null)
	let currentDate = useRef(null)
	let currentMonth = useRef(null)
	let currentYear = useRef(null)

	// ====================================================
	// Side effects
	useEffect(() => {
		setParsedUrl(queryString.parse(history.location.search.substr(1)))
		if (queryString.parse(history.location.search.substr(1)).day == 0) {
			setIsToday((isToday = true))
		} else {
			setIsToday((isToday = false))
		}
	}, [props.location.search])

	// ====================================================
	// Logic
	// Ddit current date
	if (+days.indexOf(props.date.day, 0) + +parsedUrl.day < 7) {
		currentDay.current = +days.indexOf(props.date.day, 0) + +parsedUrl.day
	} else {
		let i = +days.indexOf(props.date.day, 0) + +parsedUrl.day
		while (i > 6) {
			i -= 7
		}
		currentDay.current = i
	}
	if (+props.date.date + +parsedUrl.day <= props.date.daysInMonth) {
		currentDate.current = +props.date.date + +parsedUrl.day
		currentMonth.current = props.date.month
		currentYear.current = props.date.year
	} else {
		currentDate.current =
			+props.date.date + +parsedUrl.day - props.date.daysInMonth
		currentMonth.current = months[months.indexOf(props.date.month, 0) + 1]
		currentYear.current = props.date.year + 1
	}

	// ====================================================
	// JSX
	return (
		<div className={styles.body}>
			<p className={styles.position}>
				Weather in
				{props.city ? (
					' ' + props.city
				) : (
					<>
						{props.address[0] ? ' ' + props.address[0].name : ''}
						{props.address[2] ? ', ' + props.address[2].name : ''}
						{props.address[3] ? ', ' + props.address[3].name : ''}
						{props.address[4] ? ', ' + props.address[4].name : ''}
					</>
				)}
			</p>
			<p className={styles.time}>
				{parsedUrl.day == 0 ? 'Today' : days[currentDay.current]}
				{`, ${currentDate.current}`}
				{`, ${currentMonth.current}`}
				{`, ${currentYear.current}`}
			</p>
			<div className={styles.tempWrap}>
				<p className={styles.temp}>
					{Math.round(
						isToday
							? props.weather.main.temp
							: props.forecast.list[+parsedUrl.day - 1].temp.day
					)}
					°c
				</p>
				<div className={styles.feelsLike}>
					<p className={styles.feelsLikeTemp}>
						{Math.round(
							isToday
								? props.weather.main.feels_like
								: props.forecast.list[+parsedUrl.day - 1].feels_like.day
						)}
						°
					</p>
					<p className={styles.feelsLikeTitle}>Feels Like</p>
				</div>
			</div>
			<div className={styles.line}></div>

			{isToday ? (
				<div className={styles.cards}>
					<Card content={props.weather.weather[0].description} key={1} />
					<Card
						content={`Wind speed: ${Math.round(props.weather.wind.speed)} m/s`}
						key={2}
					/>
					<Card
						content={`Max temp: ${props.weather.main.temp_max}°c`}
						key={3}
					/>
					<Card
						content={`Min temp: ${props.weather.main.temp_min}°c`}
						key={4}
					/>
					<Card
						content={`Pressure: ${props.weather.main.pressure} mmHg`}
						key={5}
					/>
					<Card content={`Рumidity: ${props.weather.main.humidity}%`} key={6} />
				</div>
			) : (
				<div className={styles.cards}>
					<Card
						content={
							props.forecast.list[+parsedUrl.day - 1].weather[0].description
						}
						key={7}
					/>
					<Card
						content={`Wind speed: ${Math.round(
							props.forecast.list[+parsedUrl.day - 1].speed
						)} m/s`}
						key={8}
					/>
					<Card
						content={`Max temp: ${
							props.forecast.list[+parsedUrl.day - 1].temp.max
						}°c`}
						key={9}
					/>
					<Card
						content={`Min temp: ${
							props.forecast.list[+parsedUrl.day - 1].temp.min
						}°c`}
						key={10}
					/>
					<Card
						content={`Pressure: ${
							props.forecast.list[+parsedUrl.day - 1].pressure
						} mmHg`}
						key={11}
					/>
					<Card
						content={`Рumidity: ${
							props.forecast.list[+parsedUrl.day - 1].humidity
						}%`}
						key={12}
					/>
				</div>
			)}
		</div>
	)
}

// ====================================================
// Exports

export default React.memo(MainInfo)
