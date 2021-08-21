// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { compose } from 'redux'
import DetailInfo from './detailInfo'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({
	date: state.app.date,
	position: state.app.position,
	weather: state.weather,
})

// ====================================================
// Compose

export default compose(connect(mapStateToProps, {}))(DetailInfo)
