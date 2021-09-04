// ====================================================
// IMPORTS
// Main
import styles from './footer.module.scss'

// ====================================================
// Component

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className="container">
				<div className={styles.body}>
					<div className={[styles.techInfo, styles.column].join('')}>
						<p>Main</p>
						<ul>
							<li>
								<a
									href="https://github.com/z-a-h-a-r/weatherSite"
									target="_blank"
								>
									Project Code
								</a>
							</li>
							<li>
								<a
									href="https://github.com/z-a-h-a-r"
									className={styles.menu__link}
									target="_blank"
								>
									My GitHub
								</a>
							</li>
						</ul>
					</div>
					<div className={[styles.apis, styles.column].join('')}>
						<p>API</p>
						<ul>
							<li>
								<a
									href="https://openweathermap.org/"
									className={styles.menu__link}
									target="_blank"
								>
									Weather API
								</a>
							</li>
							<li>
								<a
									href="https://yandex.ru/dev/maps/geocoder/"
									className={styles.menu__link}
									target="_blank"
								>
									Geocoder API
								</a>
							</li>
						</ul>
					</div>
					<div className={[styles.contacs, styles.column].join('')}>
						<p>Contacs</p>
						<ul>
							<li>usfuld@gmail.com</li>
							<li>
								<a
									target="_blank"
									href="https://www.instagram.com/z_a_h_a_r_74/"
								>
									inst
								</a>
							</li>
							<li>
								<a target="_blank" href="https://vk.com/idzaharip">
									vk
								</a>
							</li>
							<li>
								<a target="_blank" href="https://t.me/z_a_h_a_r_74/">
									teleg
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

// ====================================================
// Exports

export default Footer
