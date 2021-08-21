// ====================================================
// IMPORTS
// Main
import './styles/zeroing.scss'
import './styles/style.scss'
import MainPage from './components/mainPage/mainPage.container'
import Loading from './components/common/loading/loading'
import { Redirect, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { initialize } from './bll/appReducer'
import { compose } from 'redux'
import { connect } from 'react-redux'

// ====================================================
// Component

const App = props => {
	useEffect(() => {
		props.initialize()
	}, [])

	return (
		<>
			{props.initialized === false ? (
				<Loading small={false} />
			) : (
				<>
					<Route
						path="/weather/:day?"
						render={() => <MainPage key={window.location.pathname} />}
					/>
					<Redirect from="*" to="/weather/today" />
				</>
			)}
		</>
	)
}

// ====================================================
// Exports

let mapStateToProps = state => ({ initialized: state.app.initialized })
export default compose(connect(mapStateToProps, { initialize }))(App)
