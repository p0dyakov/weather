// ====================================================
// IMPORTS
// Main
import styles from './mainPage.module.scss'
import Header from '../common/header/header'
import MainInfo from './mainInfo/mainInfo.container'
import DetailInfo from './detailInfo/detailInfo.container'
import WeatherImage from './weatherImage/weatherImage'
import WeatherOfTheFuture from './weatherOfTheFuture/weatherOfTheFuture'
import classNames from 'classnames'

// ====================================================
// Component

const MainPage = props => {
	return (
		<>
			<Header />
			<div className="container">
				<div className={classNames('row', styles.body)}>
					<div className={classNames('col-lg', styles.left)}>
						<MainInfo />
						<DetailInfo />
					</div>
					<div className={classNames('col-lg', styles.right)}>
						<WeatherImage />
						<WeatherOfTheFuture />
					</div>
				</div>
			</div>
		</>
	)
}

// ====================================================
// Exports

export default MainPage
