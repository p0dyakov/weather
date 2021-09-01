// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
// Components
import Forecast from './forecast'
// Reducers

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	forecast: state.weather.forecast.list,
	day: state.app.date.day,
})

// ====================================================
// Compose

export default connect(mapStateToProps, {})(Forecast)
