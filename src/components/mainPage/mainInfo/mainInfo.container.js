// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { compose } from 'redux'
import MainInfo from './mainInfo'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	date: state.app.date,
	address: state.app.position.address,
	weather: state.weather.today,
})

// ====================================================
// Compose

export default compose(connect(mapStateToProps, {}))(MainInfo)
