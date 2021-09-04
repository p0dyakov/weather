// ====================================================
// IMPORTS
// Main
import './styles/zeroing.scss'
import './styles/style.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
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
						path="/weather/:day?/:dayOfTheWeek?"
						render={() => <MainPage key={window.location.pathname} />}
					/>
					{/* <Redirect from="*" to="/weather/0" /> */}
				</>
			)}
		</>
	)
}

// ====================================================
// Exports

let mapStateToProps = state => ({ initialized: state.app.initialized })
export default compose(connect(mapStateToProps, { initialize }))(App)
