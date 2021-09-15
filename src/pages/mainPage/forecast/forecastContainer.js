// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import Forecast from './forecast'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	forecast: state.weather.forecast.list,
	day: state.app.date.day,
	address: state.app.position.address,
	weatherToday: state.weather.today,
})

// ====================================================
// Compose

export default connect(mapStateToProps, {})(Forecast)
