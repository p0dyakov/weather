// ====================================================
// IMPORTS
// Main
import './styles/zeroing.scss'
import './styles/style.scss'
import MainPage from './components/mainPage/mainPage'
import { Route } from 'react-router-dom'

// ====================================================
// Component

function App() {
	return <Route path="/" render={() => <MainPage />} />
}

// ====================================================
// Exports

export default App
