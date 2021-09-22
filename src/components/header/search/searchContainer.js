// ====================================================
// IMPORTS
import { connect } from 'react-redux'
import Search from './search'
import { getInf, setSearching } from '../../../reducers/appReducer'

// ====================================================
// MSTP & MDTP

let mapStateToProps = state => ({})

// ====================================================
// Exports

export default connect(mapStateToProps, { getInf, setSearching })(Search)
