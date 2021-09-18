// ====================================================
// IMPORTS
import React from 'react'
import styles from './logo.module.scss'

// ====================================================
// Component

const Logo = props => {
	// JSX
	return (
		<div
			className={
				props.displayNone ? [styles.media, styles.body].join(' ') : styles.body
			}
		>
			<span>Zahar's</span>
			<span>Weather</span>
			<span>App</span>
		</div>
	)
}

// ====================================================
// Exports

export default React.memo(Logo)
