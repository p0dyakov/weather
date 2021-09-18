// ====================================================
// IMPORTS
import React from 'react'
import styles from './card.module.scss'

// ====================================================
// Component

const Card = props => {
	return <div className={styles.body}>{props.content}</div>
}

// ====================================================
// Exports

export default React.memo(Card)
