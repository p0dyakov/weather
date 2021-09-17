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
				<div className={styles.inner}>
					<Logo displayNone={true} />

					<ul className={styles.menu}>
						<li className={styles.searchWrap}>
							<Search />
						</li>

						<li>
							<a
								href="https://github.com/z-a-h-a-r"
								className={styles.link}
								target="_blank"
								style={style.navlink}
							>
								My GitHub
							</a>
						</li>
						<li>
							<a
								href="https://openweathermap.org/"
								className={styles.link}
								target="_blank"
								style={style.navlink}
							>
								Weather API
							</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
}

// ====================================================
// Exports

export default Header
