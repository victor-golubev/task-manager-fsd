import type { Task } from '../../../entities/task/'
import styles from './TaskItem.module.css'

type Props = {
	task: Task
	toggleTask: (id: string) => void
	deleteTask: (id: string) => void
	onEdit: () => void
}

const TaskItemView = ({ task, toggleTask, deleteTask, onEdit }: Props) => {
	return (
		<>
			<div className={styles.content}>
				<input
					type="checkbox"
					checked={task.completed}
					onChange={() => toggleTask(task.id)}
					className={styles.checkbox}
				/>
				<span
					className={task.completed ? styles.completed : ''}
					onClick={() => toggleTask(task.id)}
					onDoubleClick={onEdit}
				>
					{task.title}
				</span>
			</div>
			<div className={styles.actions}>
				<button
					className={styles.btn}
					onClick={onEdit}
				>
					✏️
				</button>
				<button
					className={styles.btn}
					onClick={() => deleteTask(task.id)}
				>
					❌
				</button>
			</div>
		</>
	)
}

export default TaskItemView
