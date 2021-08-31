// ====================================================
// IMPORTS
// Main
import styles from './header.module.scss'
import Logo from '../logo/logo'
import { NavLink } from 'react-router-dom'
import { colours } from '../../../variables/coloursVars'

// ====================================================
// Component

const style = {
	header: {
		borderBottom: `1px ${colours.secondElementsColor} solid`,
		background: `${colours.background}`,
	},
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
									<NavLink
										to="/weather/today"
										className={styles.menu__link}
										style={style.navlink}
										activeClassName={styles.menu__linkActive}
									>
										Today
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/weather/weekend"
										style={style.navlink}
										className={styles.menu__link}
										activeClassName={styles.menu__linkActive}
									>
										Weekend
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/weather/16Days"
										style={style.navlink}
										className={styles.menu__link}
										activeClassName={styles.menu__linkActive}
									>
										16-days
									</NavLink>
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
