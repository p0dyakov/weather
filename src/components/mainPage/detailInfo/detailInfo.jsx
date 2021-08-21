// ====================================================
// IMPORTS
// Main
import styles from './detailInfo.module.scss'

// ====================================================
// Component

const DetailInfo = props => {
	return (
		<div className={styles.body}>
			<p className={styles.title}>
				Weather today in {props.position.country}, {props.position.sity}
			</p>
			<div className={styles.feelsLike}>
				<p className={styles.feelsLike__temp}>
					{Math.round(props.weather.main.feels_like)}°
				</p>
				<p className={styles.feelsLike__title}>Feels Like</p>
			</div>
		</div>
	)
}

// ====================================================
// Exports

export default DetailInfo
