// ====================================================
// IMPORTS
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import MainInfo from './mainInfo'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	date: state.app.date,
	address: state.app.position.address,
	city: state.app.position.city,
	weather: state.weather.today,
	forecast: state.weather.forecast,
})

// ====================================================
// Exports

export default compose(withRouter, connect(mapStateToProps, {}))(MainInfo)
