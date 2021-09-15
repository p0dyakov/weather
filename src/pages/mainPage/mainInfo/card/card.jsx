// ====================================================
// IMPORTS
// Main

import { colours } from '../../../../variables/coloursVars'
import styles from './card.module.scss'

// ====================================================
// Component

const style = {
	body: {
		background: `${colours.background}`,
	},
}

const Card = props => {
	return <div className={styles.body}>{props.content}</div>
}

// ====================================================
// Exports

export default Card
