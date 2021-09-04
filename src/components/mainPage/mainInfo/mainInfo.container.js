// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import MainInfo from './mainInfo'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	date: state.app.date,
	address: state.app.position.address,
	weather: state.weather.today,
	forecast: state.weather.forecast,
})

// ====================================================
// Compose

export default compose(withRouter, connect(mapStateToProps, {}))(MainInfo)
