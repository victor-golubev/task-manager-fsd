import React, { useEffect, useRef } from 'react'
import type { Task } from '../../entities/task'
import styles from './TaskItemEditor.module.css'

type Props = {
	task: Task
	value: string
	setValue: (v: string) => void
	save: () => void
	cancel: () => void
}

const TaskItemEditor = React.memo(
	({ value, setValue, save, cancel }: Props) => {
		const inputRef = useRef<HTMLInputElement>(null)

		useEffect(() => {
			if (inputRef.current) {
				inputRef.current.focus()
				const length = inputRef.current.value.length
				inputRef.current.setSelectionRange(length, length)
			}
		}, [])

		const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
			if (e.key === 'Enter') save()
			if (e.key === 'Escape') cancel()
		}

		return (
			<>
				<div className={styles.content}>
					<input
						ref={inputRef}
						value={value}
						onChange={e => setValue(e.target.value)}
						onKeyDown={handleKeyDown}
						className={styles.input}
					/>
				</div>
				<div className={styles.actions}>
					<button
						className={styles.btn}
						onClick={save}
					>
						✅
					</button>
					<button
						className={styles.btn}
						onClick={cancel}
					>
						⛔
					</button>
				</div>
			</>
		)
	}
)

export default TaskItemEditor
