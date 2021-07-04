// react
import { FaEdit, FaTimes } from 'react-icons/fa';

// third-party
import moment from 'moment';

// project
import EditTask from './EditTask';

const Task = ({ task, onDelete, onToggle, onEdit, editing, onEditSelect }) => {
	return (
		<div
			className={`task ${task.reminder ? 'reminder' : ''}`}
			onDoubleClick={() => onToggle(task.id)}
		>
			{editing === task.id ? (
				<div>
					<EditTask onEdit={onEdit} task={task} onEditSelect={onEditSelect} />
				</div>
			) : (
				<div>
					{' '}
					<h3>{task.text}</h3>
					<button
						aria-label={`edit task ${task.id}`}
						style={{ marginLeft: 'auto' }}
						onClick={() => onEditSelect(task.id)}
					>
						<FaEdit />
					</button>
					<button
						aria-label={`delete task ${task.id}`}
						style={{ color: 'red', cursor: 'pointer' }}
						onClick={() => onDelete(task.id)}
					>
						<FaTimes />
					</button>
					<p>{moment.utc(task.date).format('dddd MMM Do [at] h:mma') + ' UTC'}</p>
				</div>
			)}
		</div>
	);
};

export default Task;
