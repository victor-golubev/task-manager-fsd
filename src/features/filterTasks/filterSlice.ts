import {
	createSelector,
	createSlice,
	type PayloadAction
} from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

export type Filter = 'all' | 'completed' | 'active'

interface FilterState {
	filter: Filter
}

const initialState: FilterState = {
	filter: 'all'
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setFilter: (state, action: PayloadAction<Filter>) => {
			state.filter = action.payload
		}
	}
})

export const { setFilter } = filterSlice.actions

export default filterSlice.reducer

export const selectFilterState = (state: RootState) => state.filter

export const selectFilter = createSelector(
	selectFilterState,
	filter => filter.filter
)
