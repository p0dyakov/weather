// ====================================================
// IMPORTS
import styles from './error.module.scss'
import React from 'react'

// ====================================================
// Component

const Error = props => {
	// JSX
	return (
		<div className={styles.body}>
			<div className={styles.card}>
				Give the site access to your geolocation or find your city in the search
			</div>
		</div>
	)
}

// ====================================================
// Exports

export default React.memo(Error)
