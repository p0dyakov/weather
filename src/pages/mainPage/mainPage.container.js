// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import MainPage from './mainPage'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	date: state.app.date,
	position: state.app.position,
	todayWeather: state.weather.today,
	searching: state.app.searching,
})

// ====================================================
// Compose

export default connect(mapStateToProps, {})(MainPage)