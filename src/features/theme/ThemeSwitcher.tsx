import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../../app/store'
import { selectTheme, toggleTheme } from './themeSlice'
import styles from './ThemeSwitcher.module.css'

const ThemeSwitcher = () => {
	const dispatch = useDispatch<AppDispatch>()
	const theme = useSelector(selectTheme)

	return (
		<button
			onClick={() => dispatch(toggleTheme())}
			className={styles.switch}
		>
			{theme === 'light' ? '🌙' : '☀️'}
		</button>
	)
}

export default ThemeSwitcher
