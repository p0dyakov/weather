// ====================================================
// IMPORTS
// Main
import { colours } from '../../../variables/coloursVars'
import styles from './mainInfo.module.scss'

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
	return (
		<div className={styles.body}>
			<p className={styles.position} style={style.position}>
				Weather in {props.address[0] ? ' ' + props.address[0].name : ''}
				{props.address[2] ? ', ' + props.address[2].name : ''}
				{props.address[3] ? ', ' + props.address[3].name : ''}
				{props.address[4] ? ', ' + props.address[4].name : ''}
			</p>
			<p className={styles.time} style={style.time}>
				{props.date.day}
			</p>
			<div className={styles.tempWrap}>
				<p className={styles.temp} style={style.temp}>
					{Math.round(props.weather.main.temp)}°c
				</p>
				<div className={styles.feelsLike}>
					<p className={styles.feelsLikeTemp} style={style.feelsLikeTemp}>
						{Math.round(props.weather.main.feels_like)}°
					</p>
					<p className={styles.feelsLikeTitle} style={style.feelsLikeTitle}>
						Feels Like
					</p>
				</div>
			</div>
			<div className={styles.line} style={style.line}></div>
			<p className={styles.weather} style={style.weather}>
				{props.weather.weather[0].main}
			</p>
		</div>
	)
}

// ====================================================
// Exports

export default MainInfo
