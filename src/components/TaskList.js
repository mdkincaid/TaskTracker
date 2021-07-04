// react
import { useState } from 'react';


import Task from './Task';

const TaskList = ({ tasks, onDelete, onToggle, onEdit }) => {
	const [editing, setEditing] = useState('');

	const onEditSelect = (id) => {
			setEditing(id);
	};

	return (
		<>
			{tasks.map((task) => (
				<Task
					aria-label={`task ${task.id}`}
					key={task.id}
					task={task}
					onDelete={onDelete}
					onToggle={onToggle}
					onEdit={onEdit}
					editing={editing}
					onEditSelect={onEditSelect}
				/>
			))}
		</>
	);
};

export default TaskList;
