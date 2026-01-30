import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

export type Theme = 'light' | 'dark'

interface ThemeState {
	theme: Theme
}

const savedTheme = (localStorage.getItem('theme') as Theme) || 'light'

const initialState: ThemeState = {
	theme: savedTheme
}

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<Theme>) => {
			state.theme = action.payload
			localStorage.setItem('theme', state.theme)
		},
		toggleTheme: state => {
			state.theme = state.theme === 'light' ? 'dark' : 'light'
			localStorage.setItem('theme', state.theme)
		}
	}
})

export const { setTheme, toggleTheme } = themeSlice.actions

export const selectTheme = (state: RootState) => state.theme.theme

export default themeSlice.reducer
