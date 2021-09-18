// ====================================================
// IMPORTS
import { connect } from 'react-redux'
import Forecast from './forecast'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	forecast: state.weather.forecast.list,
	date: state.app.date,
	address: state.app.position.address,
	weatherToday: state.weather.today,
})

// ====================================================
// Export

export default connect(mapStateToProps, {})(Forecast)
