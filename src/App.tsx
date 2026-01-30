import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectTheme } from './features/theme/themeSlice'
import TasksPage from './pages/TasksPage/TasksPage'

function App() {
	const theme = useSelector(selectTheme)

	useEffect(() => {
		document.body.setAttribute('data-theme', theme)
	}, [theme])

	return (
		<div className="app">
			<TasksPage />
		</div>
	)
}

export default App
