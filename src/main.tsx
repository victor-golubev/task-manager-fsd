import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import './app/styles/base.css'
import TasksPage from './pages/TasksPage/TasksPage'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<TasksPage />
		</Provider>
	</StrictMode>
)
