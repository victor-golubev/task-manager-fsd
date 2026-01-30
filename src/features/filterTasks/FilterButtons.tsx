import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../../app/store'
import styles from './FilterButtons.module.css'
import type { Filter } from './filterSlice'
import { selectFilter, setFilter } from './filterSlice'

const FilterButtons = () => {
	const dispatch = useDispatch<AppDispatch>()
	const activeFilter = useSelector(selectFilter)

	const buttons: { label: string; value: Filter }[] = [
		{ label: 'Все', value: 'all' },
		{ label: 'Активные', value: 'active' },
		{ label: 'Завершенные', value: 'completed' }
	]
	return (
		<div className={styles.filters}>
			{buttons.map(button => (
				<button
					key={button.value}
					onClick={() => dispatch(setFilter(button.value))}
					className={`${styles.filterBtn} ${
						activeFilter === button.value ? styles.active : ''
					}`}
				>
					{button.label}
				</button>
			))}
		</div>
	)
}

export default FilterButtons
