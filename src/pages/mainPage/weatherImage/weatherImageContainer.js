// ====================================================
// IMPORTS
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import WeatherImage from './weatherImage'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	icon: state.weather.today.weather[0].icon,
	list: state.weather.forecast.list,
})

// ====================================================
// Exports

export default compose(withRouter, connect(mapStateToProps, {}))(WeatherImage)
