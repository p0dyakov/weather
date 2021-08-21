// ====================================================
// IMPORTS
// Main
import styles from './mainInfo.module.scss'

// ====================================================
// Component

const MainInfo = props => {
	return (
		<div className={styles.body}>
			<p className={styles.position}>
				{props.position.country}, {props.position.region}, {props.position.sity}
			</p>
			<p className={styles.time}>{props.date.day}</p>
			<p className={styles.temp}>{Math.round(props.weather.main.temp)}°c</p>
			<div className={styles.line}></div>
			<p className={styles.weather}>{props.weather.weather[0].main}</p>
		</div>
	)
}

// ====================================================
// Exports

export default MainInfo
