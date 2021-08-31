// ====================================================
// IMPORTS
// Main
import { colours } from '../../../variables/coloursVars'
import styles from './detailInfo.module.scss'

// ====================================================
// Component

const style = {
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

const DetailInfo = props => {
	return (
		<div className={styles.body}>
			<p className={styles.title} style={style.title}>
				Weather today in {props.position.country}, {props.position.sity}
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
	)
}

// ====================================================
// Exports

export default DetailInfo
