import { useState } from 'react'
import type { Task } from '../../../entities/task'
import TaskItemView from './TaskItemView'
import TaskItemEditor from './TaskItemEditor'
import styles from './TaskItem.module.css'

type Props = {
	task: Task
	toggleTask: (id: string) => void
	deleteTask: (id: string) => void
	updateTask: (id: string, title: string) => void
}

const TaskItem = ({ task, toggleTask, deleteTask, updateTask }: Props) => {
	const [isEditing, setIsEditing] = useState(false)
	const [value, setValue] = useState(task.title)

	const save = () => {
		const trimmed = value.trim()
		if (trimmed && trimmed !== task.title) {
			updateTask(task.id, trimmed)
		}
		setIsEditing(false)
	}

	const cancel = () => {
		setValue(task.title)
		setIsEditing(false)
	}

	return (
		<div className={styles.item}>
			{isEditing ? (
				<TaskItemEditor
					task={task}
					value={value}
					setValue={setValue}
					save={save}
					cancel={cancel}
				/>
			) : (
				<TaskItemView
					task={task}
					toggleTask={toggleTask}
					deleteTask={deleteTask}
					onEdit={() => setIsEditing(true)}
				/>
			)}
		</div>
	)
}

export default TaskItem
