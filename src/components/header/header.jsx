// ====================================================
// IMPORTS
import styles from './header.module.scss'
import Logo from '../logo/logo'
import Search from './search/searchContainer'
import React from 'react'

// ====================================================
// Component

const Header = () => {
	// JSX
	return (
		<header className={styles.header}>
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
							>
								My GitHub
							</a>
						</li>
						<li>
							<a
								href="https://openweathermap.org/"
								className={styles.link}
								target="_blank"
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

export default React.memo(Header)
