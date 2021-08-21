// ====================================================
// IMPORTS
// Styles

import styles from './loading.module.scss'

// ====================================================
// Component

function Loading(props) {
	return (
		<>
			{props.small ? (
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
			) : (
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
			)}
		</>
	)
}

// ====================================================
// Exports

export default Loading
