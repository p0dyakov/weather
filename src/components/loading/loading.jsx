// ====================================================
// IMPORTS
import React from 'react'
import styles from './loading.module.scss'

// ====================================================
// Component

const Loading = () => {
	// JSX
	return (
		<div className={styles.body}>
			<div className={styles.ldsRoller}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}

// ====================================================
// Exports

export default React.memo(Loading)
