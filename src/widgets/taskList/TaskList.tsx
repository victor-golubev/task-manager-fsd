import type { Task } from '../../entities/task/'
import TaskItem from './TaskItem/TaskItem'
import styles from './TaskList.module.css'

type Props = {
	tasks: Task[]
	toggleTask: (id: string) => void
	deleteTask: (id: string) => void
	updateTask: (id: string, title: string) => void
}

const TaskList = ({ tasks, toggleTask, deleteTask, updateTask }: Props) => {
	return (
		<div className={styles.list}>
			{tasks.map(task => (
				<TaskItem
					key={task.id}
					task={task}
					toggleTask={toggleTask}
					deleteTask={deleteTask}
					updateTask={updateTask}
				/>
			))}
		</div>
	)
}

export default TaskList
