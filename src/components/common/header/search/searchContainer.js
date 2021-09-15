// ====================================================
// IMPORTS
// Main
import { connect } from 'react-redux'
import Search from './search'
import { getInf, setSearching } from '../../../../bll/appReducer'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({})

// ====================================================
// Compose

export default connect(mapStateToProps, { getInf, setSearching })(Search)
