// ====================================================
// IMPORTS
// Main
import styles from './header.module.scss'
import Logo from '../logo/logo'
import { NavLink } from 'react-router-dom'
import { colours } from '../../../variables/coloursVars'
import Search from './search/searchContainer'

// ====================================================
// Component

const style = {
	header: {},
	navlink: {
		color: `${colours.firstTextColor}`,
	},
}

const Header = props => {
	return (
		<header className={styles.header} style={style.header}>
			<div className="container">
				<div className={styles.header__inner}>
					<Logo />

					<div className={styles.header__menu}>
						<div className={styles.menu__icon}>
							<span></span>
						</div>

						<nav className={styles.menu__body}>
							<ul className={styles.menu__list}>
								<li>
									<Search />
								</li>
								{/* <li>
									<a
										href="/weather/0"
										className={styles.menu__link}
										style={style.navlink}
									>
										Weather Today
									</a>
								</li> */}
								<li>
									<a
										href="https://github.com/z-a-h-a-r"
										className={styles.menu__link}
										target="_blank"
										style={style.navlink}
									>
										My GitHub
									</a>
								</li>
								<li>
									<a
										href="https://openweathermap.org/"
										className={styles.menu__link}
										target="_blank"
										style={style.navlink}
									>
										Weather API
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	)
}

// ====================================================
// Exports

export default Header
