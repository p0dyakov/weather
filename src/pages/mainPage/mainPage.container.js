// ====================================================
// IMPORTS
import { connect } from 'react-redux'
import MainPage from './mainPage'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	date: state.app.date,
	position: state.app.position,
	todayWeather: state.weather.today,
	searchWeatherError: state.weather.error,
	searching: state.app.searching,
})

// ====================================================
// Exports

export default connect(mapStateToProps, {})(MainPage)
