// ====================================================
// IMPORTS
// Main
import styles from './mainPage.module.scss'
import Header from '../common/header/header'
import Footer from '../common/footer/footer'
import MainInfo from './mainInfo/mainInfo.container'
import WeatherImage from './weatherImage/weatherImageContainer'
import Forecast from './forecast/forecastContainer'
import classNames from 'classnames'
import { colours } from '../../variables/coloursVars'

// ====================================================
// Component

const style = {
	body: {
		background: `${colours.background}`,
	},
}

const MainPage = props => {
	return (
		<div className={styles.body} style={style.body}>
			<img src="/images/backgrounds/1.png" className={styles.background} />
			<div className={styles.content}>
				<Header />
				<div className="container">
					<div className={classNames('row', styles.body)}>
						<div className={classNames('col-lg', styles.left)}>
							<MainInfo />
						</div>
						<div className={classNames('col-lg', styles.right)}>
							<WeatherImage />
						</div>
						<Forecast />
					</div>
				</div>
				<Footer />
			</div>
		</div>
	)
}

// ====================================================
// Exports

export default MainPage
