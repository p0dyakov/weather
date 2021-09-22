// ====================================================
// IMPORTS
import './styles/zeroing.scss'
import './styles/style.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MainPage from './pages/mainPage/mainPage.container'
import Loading from './components/loading/loading'
import { Route } from 'react-router-dom'
import { useHistory } from 'react-router'
import React, { useEffect } from 'react'
import { getInf } from './reducers/appReducer'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as queryString from 'querystring'

// ====================================================
// Component

const App = props => {
	// Variables
	const history = useHistory()

	// ====================================================
	// Side effects
	useEffect(() => {
		const parsedUrl = queryString.parse(history.location.search.substr(1))

		if (
			parsedUrl.day != '0' &&
			parsedUrl.day != '1' &&
			parsedUrl.day != '2' &&
			parsedUrl.day != '3' &&
			parsedUrl.day != '4' &&
			parsedUrl.day != '5' &&
			parsedUrl.day != '6' &&
			parsedUrl.day != '7' &&
			parsedUrl.day != '8' &&
			parsedUrl.day != '9' &&
			parsedUrl.day != '10' &&
			parsedUrl.day != '11' &&
			parsedUrl.day != '12' &&
			parsedUrl.day != '13' &&
			parsedUrl.day != '14' &&
			parsedUrl.day != '15' &&
			parsedUrl.day != '16'
		) {
			history.push({
				pathname: '',
				search: `day=0`,
			})
		}
		if (parsedUrl.city) {
			props.getInf(parsedUrl.city.replace(/[^a-zа-яё0-9 ]/gi, '').trim())
		} else {
			props.getInf()
		}
	}, [])

	// ====================================================
	// JSX
	return (
		<>
			{props.initialized === false ? (
				<Loading />
			) : (
				<>
					<Route path="/" render={() => <MainPage />} />
				</>
			)}
		</>
	)
}

// ====================================================
// Exports

let mapStateToProps = state => ({
	initialized: state.app.initialized,
})
export default React.memo(compose(connect(mapStateToProps, { getInf }))(App))
