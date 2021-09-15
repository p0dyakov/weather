// ====================================================
// IMPORTS
// Main
import { useEffect, useState } from 'react'
import { colours } from '../../../variables/coloursVars'
import Card from './card/card'
import styles from './mainInfo.module.scss'
import * as queryString from 'querystring'
import { useHistory } from 'react-router'

// ====================================================
// Component

const style = {
	position: {
		color: `${colours.firstTextColor}`,
	},
	time: {
		color: `${colours.secondTextColor}`,
	},
	temp: {
		color: `${colours.mainColor}`,
	},
	line: {
		borderBottom: `1px ${colours.secondElementsColor} solid`,
	},
	weather: {
		color: `${colours.firstTextColor}`,
	},
	title: {
		color: `${colours.firstTextColor}`,
	},
	feelsLikeTemp: {
		color: `${colours.firstTextColor}`,
	},
	feelsLikeTitle: {
		color: `${colours.secondTextColor}`,
	},
}

const MainInfo = props => {
	const history = useHistory()
	let [parsedUrl, setParsedUrl] = useState(
		queryString.parse(history.location.search.substr(1))
	)
	let [isToday, setIsToday] = useState(true)

	useEffect(() => {
		setParsedUrl(queryString.parse(history.location.search.substr(1)))
		if (queryString.parse(history.location.search.substr(1)).day == 0) {
			setIsToday((isToday = true))
		} else {
			setIsToday((isToday = false))
		}
	}, [props.location.search])

	return (
		<div className={styles.body}>
			<p className={styles.position} style={style.position}>
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
			<p className={styles.time} style={style.time}>
				{isToday ? props.date.day : '?????'}
			</p>
			<div className={styles.tempWrap}>
				<p className={styles.temp} style={style.temp}>
					{Math.round(
						isToday
							? props.weather.main.temp
							: props.forecast.list[+parsedUrl.day - 1].temp.day
					)}
					°c
				</p>
				<div className={styles.feelsLike}>
					<p className={styles.feelsLikeTemp} style={style.feelsLikeTemp}>
						{Math.round(
							isToday
								? props.weather.main.feels_like
								: props.forecast.list[+parsedUrl.day - 1].feels_like.day
						)}
						°
					</p>
					<p className={styles.feelsLikeTitle} style={style.feelsLikeTitle}>
						Feels Like
					</p>
				</div>
			</div>
			<div className={styles.line} style={style.line}></div>

			{isToday ? (
				<div className={styles.cards}>
					<Card
						content={props.weather.weather[0].description}
						key={window.location.pathname}
					/>
					<Card
						content={`Wind speed: ${Math.round(props.weather.wind.speed)} m/s`}
						key={window.location.pathname}
					/>
					<Card
						content={`Max temp: ${props.weather.main.temp_max}°c`}
						key={window.location.pathname}
					/>
					<Card
						content={`Min temp: ${props.weather.main.temp_min}°c`}
						key={window.location.pathname}
					/>
					<Card
						content={`Pressure: ${props.weather.main.pressure} mmHg`}
						key={window.location.pathname}
					/>
					<Card
						content={`Рumidity: ${props.weather.main.humidity}%`}
						key={window.location.pathname}
					/>
				</div>
			) : (
				<div className={styles.cards}>
					<Card
						content={
							props.forecast.list[+parsedUrl.day - 1].weather[0].description
						}
						key={window.location.pathname}
					/>
					<Card
						content={`Wind speed: ${Math.round(
							props.forecast.list[+parsedUrl.day - 1].speed
						)} m/s`}
						key={window.location.pathname}
					/>
					<Card
						content={`Max temp: ${
							props.forecast.list[+parsedUrl.day - 1].temp.max
						}°c`}
						key={window.location.pathname}
					/>
					<Card
						content={`Min temp: ${
							props.forecast.list[+parsedUrl.day - 1].temp.min
						}°c`}
						key={window.location.pathname}
					/>
					<Card
						content={`Pressure: ${
							props.forecast.list[+parsedUrl.day - 1].pressure
						} mmHg`}
						key={window.location.pathname}
					/>
					<Card
						content={`Рumidity: ${
							props.forecast.list[+parsedUrl.day - 1].humidity
						}%`}
						key={window.location.pathname}
					/>
				</div>
			)}
		</div>
	)
	return <p>adasd</p>
}

// ====================================================
// Exports

export default MainInfo
