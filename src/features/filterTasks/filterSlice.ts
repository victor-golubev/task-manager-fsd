import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
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

export const selectFilter = (state: RootState) => state.filter.filter

export default filterSlice.reducer
