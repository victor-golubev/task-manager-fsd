import React from 'react'
import type { Task } from '../../entities/task'

import styles from './TaskList.module.css'
import TaskItem from '../taskItem/TaskItem'

type Props = {
	tasks: Task[]
	toggleTask: (id: string) => void
	deleteTask: (id: string) => void
	updateTask: (id: string, title: string) => void
}

const TaskList = React.memo(
	({ tasks, toggleTask, deleteTask, updateTask }: Props) => {
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
)

export default TaskList
