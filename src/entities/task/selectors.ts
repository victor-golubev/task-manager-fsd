import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

export const selectTaskState = (state: RootState) => state.task

export const selectTasks = createSelector(selectTaskState, task => task.tasks)

export const selectLoading = createSelector(
	selectTaskState,
	task => task.loading
)

export const selectError = createSelector(selectTaskState, task => task.error)

export const selectHasTasks = createSelector(
	selectTasks,
	tasks => tasks.length > 0
)
