import styles from './EmptyState.module.css'

const TasksNotFound = () => {
	return (
		<>
			<div className={styles.empty}>🔍 Задачи не найдены</div>
		</>
	)
}

export default TasksNotFound
