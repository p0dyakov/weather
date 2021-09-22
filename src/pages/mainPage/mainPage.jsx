// ====================================================
// IMPORTS
import styles from './mainPage.module.scss'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import MainInfo from './mainInfo/mainInfo.container'
import WeatherImage from './weatherImage/weatherImageContainer'
import Forecast from './forecast/forecastContainer'
import Error from './error/error'
import classNames from 'classnames'
import Loading from '../../components/loading/loading'
import React from 'react'
import bg from '../../images/backgrounds/1.png'

// ====================================================
// Component

const MainPage = props => {
	// JSX
	return (
		<div className={styles.body}>
			<img src={bg} className={styles.background} />
			<div className={styles.content}>
				<Header />
				<div className="container">
					{props.searching ? (
						<div className={styles.wrapperForLoading}>
							<Loading />
						</div>
					) : (
						<>
							{props.todayWeather.id ? (
								<div className={classNames('row', styles.body)}>
									<div className={classNames('col-md', styles.left)}>
										<MainInfo key={window.location.pathname} />
									</div>
									<div className={classNames('col-md', styles.right)}>
										<WeatherImage />
									</div>
									<Forecast />
								</div>
							) : (
								<Error
									content={
										'Find your city in the search or give the site access to your geolocation and reload page'
									}
								/>
							)}
						</>
					)}
				</div>
				<Footer />
			</div>
		</div>
	)
}

// ====================================================
// Exports

export default React.memo(MainPage)
