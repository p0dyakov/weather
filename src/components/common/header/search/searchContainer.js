// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
// Components
import Search from './search'
// Reducers
import { getInf, setSearching } from '../../../../bll/appReducer'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({})

// ====================================================
// Compose

export default compose(
	withRouter,
	connect(mapStateToProps, { getInf, setSearching })
)(Search)
