// ====================================================
// IMPORTS
// Main
import styles from './header.module.scss'
import Logo from '../logo/logo'
import { NavLink } from 'react-router-dom'

// ====================================================
// Component

const Header = props => {
	return (
		<header className={styles.header}>
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
										activeClassName={styles.menu__linkActive}
									>
										Today
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/weather/weekend"
										className={styles.menu__link}
										activeClassName={styles.menu__linkActive}
									>
										Weekend
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/weather/tenDays"
										className={styles.menu__link}
										activeClassName={styles.menu__linkActive}
									>
										10-day
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/weather/monthly"
										className={styles.menu__link}
										activeClassName={styles.menu__linkActive}
									>
										Monthly
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
