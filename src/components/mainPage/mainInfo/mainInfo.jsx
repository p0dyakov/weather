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
}

const MainInfo = props => {
	return (
		<div className={styles.body}>
			<p className={styles.position} style={style.position}>
				{props.position.country}, {props.position.region}, {props.position.sity}
			</p>
			<p className={styles.time} style={style.time}>
				{props.date.day}
			</p>
			<p className={styles.temp} style={style.temp}>
				{Math.round(props.weather.main.temp)}°c
			</p>
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
