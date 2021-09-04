// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import WeatherImage from './weatherImage'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	icon: state.weather.today.weather[0].icon,
	list: state.weather.forecast.list,
})

// ====================================================
// Compose

export default compose(withRouter, connect(mapStateToProps, {}))(WeatherImage)
