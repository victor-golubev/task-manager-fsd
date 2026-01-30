import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

type SearchState = {
	query: string
}

const initialState: SearchState = {
	query: ''
}

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setQuery: (state, action) => {
			state.query = action.payload
		},
		clearQuery: state => {
			state.query = ''
		}
	}
})

export const { setQuery, clearQuery } = searchSlice.actions

export default searchSlice.reducer

export const selectSearchQuery = (state: RootState) => state.search.query
