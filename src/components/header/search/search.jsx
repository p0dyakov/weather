// ====================================================
// IMPORTS
import styles from './search.module.scss'
import { Formik } from 'formik'
import { useHistory } from 'react-router'
import * as queryString from 'querystring'
import search from '../../../images/common/search.svg'

// ====================================================
// Component

const Search = props => {
	// Variables
	const history = useHistory()
	const parsedUrl = queryString.parse(history.location.search.substr(1))

	// ====================================================
	// JSX

	return (
		<div>
			<Formik
				initialValues={{ city: '' }}
				validate={values => {
					const errors = {}
					return errors
				}}
				onSubmit={(values, { setSubmitting }) => {
					history.push({
						pathname: '',
						search: `day=${+parsedUrl.day}&city=${values.city}`,
					})
					props.setSearching(true)
					props.getInf(values.city)
					setSubmitting(false)
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
				}) => (
					<>
						<form onSubmit={handleSubmit} className={styles.form}>
							<input
								className={styles.input}
								type="text"
								name="city"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
								placeholder={'Search your city'}
								className={styles.input}
							/>

							<button
								disabled={isSubmitting}
								className={styles.button}
								type="submit"
								className={styles.button}
							>
								<img src={search} alt="" />
							</button>
						</form>
					</>
				)}
			</Formik>
		</div>
	)
}

// ====================================================
// Exports

export default Search
