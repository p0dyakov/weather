// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
// Components
import MainPage from './mainPage'
// Reducers

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	date: state.app.date,
	position: state.app.position,
	weather: state.weather,
})

// ====================================================
// Compose

export default compose(withRouter, connect(mapStateToProps, {}))(MainPage)