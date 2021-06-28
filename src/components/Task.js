// react
import { FaEdit, FaTimes } from 'react-icons/fa';

// third-party
import moment from 'moment';

// project
import EditTask from './EditTask';

const Task = ({ task, onDelete, onToggle, onEdit, editing, setEditing }) => {
	return (
		<div
			className={`task ${task.reminder ? 'reminder' : ''}`}
			onDoubleClick={() => onToggle(task.id)}
		>
			{editing === task.id ? (
				<div>
					<EditTask
						onEdit={onEdit}
						task={task}
						setEditing={setEditing}
					/>
				</div>
			) : (
				<div>
					{' '}
					<h3>
						{task.text}
						<FaEdit
							style={{ marginLeft: 'auto' }}
							onClick={() => setEditing(task.id)}
						/>
						<FaTimes
							style={{ color: 'red', cursor: 'pointer' }}
							onClick={() => onDelete(task.id)}
						/>
					</h3>
					<p>{moment(task.date).format('dddd MMM Do [at] h:mma')}</p>
				</div>
			)}
		</div>
	);
};

export default Task;
