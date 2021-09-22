// ====================================================
// IMPORTS
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import store from './stores/appStore'

// ====================================================

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter basename={'/weatherSite/'}>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)
