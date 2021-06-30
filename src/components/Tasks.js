// react
import { useState } from 'react';


import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle, onEdit }) => {
	const [editing, setEditing] = useState('');

	const setEditStatus = (id) => {
		if (editing === id) {
			setEditing('');
		} else {
			setEditing(id);
		}
	};

	return (
		<>
			{tasks.map((task) => (
				<Task
					key={task.id}
					task={task}
					onDelete={onDelete}
					onToggle={onToggle}
					onEdit={onEdit}
					editing={editing}
					setEditing={setEditStatus}
				/>
			))}
		</>
	);
};

export default Tasks;
