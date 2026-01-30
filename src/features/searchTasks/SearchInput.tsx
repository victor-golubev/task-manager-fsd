import { createSelector } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../../app/store'
import styles from './SearchInput.module.css'
import { setQuery } from './searchSlice'

export const selectSearchState = (state: RootState) => state.search

export const selectSearchQuery = createSelector(
	selectSearchState,
	search => search.query
)

const SearchInput = () => {
	const dispatch = useDispatch<AppDispatch>()

	const query = useSelector(selectSearchQuery)

	return (
		<input
			placeholder="Поиск задач..."
			value={query}
			onChange={e => dispatch(setQuery(e.target.value))}
			className={styles.search}
			aria-label="Поиск задач"
		/>
	)
}

export default SearchInput
