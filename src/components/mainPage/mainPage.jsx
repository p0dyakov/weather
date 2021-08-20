// ====================================================
// IMPORTS
// Main
import { useEffect } from 'react'
import Header from '../common/header/header'
import styles from './mainPage.module.scss'

// ====================================================
// Component

const MainPage = props => {
	// useEffect(() => {
	// 	console.log(props.match.params.day)
	// })
	return (
		<div className={styles.body}>
			<Header />
		</div>
	)
}

// ====================================================
// Exports

export default MainPage
