import { useState } from 'react'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../app/store'
import { addTask } from '../../entities/task/'
import styles from './AddTaskForm.module.css'

const AddTaskForm = () => {
	const dispatch = useDispatch<AppDispatch>()
	const [title, setTitle] = useState('')

	const handleAdd = () => {
		if (title.trim()) {
			dispatch(addTask(title))
			setTitle('')
		}
	}

	return (
		<div className={styles.form}>
			<input
				type="text"
				placeholder="Введите задачу"
				value={title}
				onChange={e => setTitle(e.target.value)}
				onKeyDown={e => e.key === 'Enter' && handleAdd()}
				className={styles.input}
			/>
			<button
				onClick={handleAdd}
				className={styles.button}
				disabled={!title.trim()}
			>
				Создать
			</button>
		</div>
	)
}

export default AddTaskForm
