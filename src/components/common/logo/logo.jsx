// ====================================================
// IMPORTS
// Main
import { colours } from '../../../variables/coloursVars'
import styles from './logo.module.scss'

// ====================================================
// Component

const style = {
	body: {
		background: `${colours.firstElementsColor}`,
	},
	span: {
		color: `${colours.thirdTextColor}`,
	},
}

const Logo = () => {
	return (
		<div className={styles.body} style={style.body}>
			<span style={style.span}>Zahar's</span>
			<span style={style.span}>Weather</span>
			<span style={style.span}>App</span>
		</div>
	)
}

// ====================================================
// Exports

export default Logo
