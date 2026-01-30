import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../entities/task/taskSlice'
import filterReducer from '../features/filterTasks/filterSlice'
import searchReducer from '../features/searchTasks/searchSlice'
import themeReducer from '../features/theme/themeSlice'

export const store = configureStore({
	reducer: {
		task: taskReducer,
		filter: filterReducer,
		search: searchReducer,
		theme: themeReducer
	}
})

store.subscribe(() => {
	const tasks = store.getState().task.tasks
	localStorage.setItem('tasks', JSON.stringify(tasks))
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
