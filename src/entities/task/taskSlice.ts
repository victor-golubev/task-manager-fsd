import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type Task = {
	id: string
	title: string
	completed: boolean
}

interface TaskState {
	tasks: Task[]
	loading: boolean
	error: string | null
}

const loadTasks = (): Task[] => {
	try {
		return JSON.parse(localStorage.getItem('tasks') || '[]')
	} catch {
		return []
	}
}

const initialState: TaskState = {
	tasks: loadTasks(),
	loading: false,
	error: null
}

const taskSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<string>) => {
			state.tasks.push({
				id: Date.now().toString(),
				title: action.payload,
				completed: false
			})
		},
		toggleTask: (state, action: PayloadAction<string>) => {
			const task = state.tasks.find(task => task.id === action.payload)
			if (task) task.completed = !task.completed
		},
		deleteTask: (state, action: PayloadAction<string>) => {
			state.tasks = state.tasks.filter(task => task.id !== action.payload)
		},
		updateTask: (
			state,
			action: PayloadAction<{ id: string; title: string }>
		) => {
			const task = state.tasks.find(t => t.id === action.payload.id)
			if (task) {
				task.title = action.payload.title
			}
		}
	}
})

export const { addTask, toggleTask, deleteTask, updateTask } = taskSlice.actions
export default taskSlice.reducer
