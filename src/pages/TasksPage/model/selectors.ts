import { createSelector } from '@reduxjs/toolkit'
import { selectTasks } from '../../../entities/task'
import { selectFilter } from '../../../features/filterTasks/filterSlice'
import { selectSearchQuery } from '../../../features/searchTasks/searchSlice'

export const selectFilteredTasks = createSelector(
	[selectTasks, selectFilter, selectSearchQuery],
	(tasks, filter, query) => {
		let filtered = tasks

		if (filter === 'active') {
			filtered = filtered.filter(t => !t.completed)
		}

		if (filter === 'completed') {
			filtered = filtered.filter(t => t.completed)
		}

		if (query) {
			filtered = filtered.filter(t =>
				t.title.toLowerCase().includes(query.toLowerCase())
			)
		}

		return filtered
	}
)
