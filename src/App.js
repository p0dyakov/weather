// ====================================================
// IMPORTS
// Main
import './styles/zeroing.scss'
import './styles/style.scss'
import MainPage from './components/mainPage/mainPage.container'
import { Redirect, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { getPosition, getDate } from './bll/appReducer'
import { getWeather } from './bll/weatherReducer'
import { compose } from 'redux'
import { connect } from 'react-redux'

// ====================================================
// Component

const App = props => {
	useEffect(() => {
		props.getPosition()
		props.getDate()
		props.getWeather()
	}, [])

	return (
		<>
			<Route
				path="/weather/:day?"
				render={() => <MainPage key={window.location.pathname} />}
			/>
			<Redirect from="*" to="/weather/today" />
		</>
	)
}

// ====================================================
// Exports

let mapStateToProps = state => ({ getWeather })
export default compose(
	connect(mapStateToProps, { getPosition, getDate, getWeather })
)(App)
