import { useDispatch, useSelector } from 'react-redux'
import styles from './SearchInput.module.css'
import { selectSearchQuery, setQuery } from './searchSlice'

const SearchInput = () => {
	const dispatch = useDispatch()
	const query = useSelector(selectSearchQuery)

	return (
		<input
			placeholder="Поиск задач..."
			value={query}
			onChange={e => dispatch(setQuery(e.target.value))}
			className={styles.search}
		></input>
	)
}

export default SearchInput
