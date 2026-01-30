import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../../app/store'
import { deleteTask, toggleTask, updateTask } from '../../entities/task'
import {
	selectError,
	selectHasTasks,
	selectLoading
} from '../../entities/task/selectors'
import AddTaskForm from '../../features/addTask/AddTaskForm'
import FilterButtons from '../../features/filterTasks/FilterButtons'
import SearchInput from '../../features/searchTasks/SearchInput'
import ThemeSwitcher from '../../features/theme/ThemeSwitcher'
import EmptyState from '../../widgets/emptyState/EmptyState'
import TaskList from '../../widgets/taskList/TaskList'
import TasksNotFound from '../../widgets/tasksNotFound/TasksNotFound'
import { selectFilteredTasks } from './model/selectors'
import styles from './TaskPage.module.css'

const TasksPage = () => {
	const dispatch = useDispatch<AppDispatch>()
	const tasks = useSelector(selectFilteredTasks)
	const loading = useSelector(selectLoading)
	const error = useSelector(selectError)
	const hasTasks = useSelector(selectHasTasks)

	return (
		<div className={styles.page}>
			<ThemeSwitcher />
			<h1 className={styles.title}>Task Manager</h1>

			<AddTaskForm />
			<SearchInput />
			<FilterButtons />

			{loading && <p>Loading...</p>}

			{error && <p className={styles.error}>{error}</p>}

			{!hasTasks && !loading && <EmptyState />}

			{!tasks.length && hasTasks && <TasksNotFound />}

			{tasks.length > 0 && hasTasks && (
				<TaskList
					tasks={tasks}
					toggleTask={id => dispatch(toggleTask(id))}
					deleteTask={id => dispatch(deleteTask(id))}
					updateTask={(id, title) => dispatch(updateTask({ id, title }))}
				/>
			)}
		</div>
	)
}

export default TasksPage
