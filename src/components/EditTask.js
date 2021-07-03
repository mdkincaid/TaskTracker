// react
import { useState } from 'react';

// third-party
import moment from 'moment';

// project
import TaskInfoForm from './TaskInfoForm';

const EditTask = ({ onEdit, task, onEditSelect }) => {
	var dateString = moment(task.date).format('YYYY-MM-DD h:mm a');

	const [text, setText] = useState(task.text);
	const [reminder, setReminder] = useState(task.reminder);
	const [startDate, setStartDate] = useState(
		moment(dateString, 'YYYY-MM-DD h:mm a').toDate()
	);

	const onSubmit = (e) => {
		e.preventDefault();

		if (!text) {
			alert('Please enter a task');
			return;
		}

		const date = startDate.toISOString();

		const id = task.id;

		onEdit({ text, date, reminder, id });
		onEditSelect('');
	};

	const onCancel = (e) => {
		e.preventDefault();
		onEditSelect('');
	};

	return (
		<TaskInfoForm
			onSubmit={onSubmit}
			onCancel={onCancel}
			text={text}
			setText={setText}
			reminder={reminder}
			setReminder={setReminder}
			startDate={startDate}
			setStartDate={setStartDate}
			formType={'Edit'}
		/>
	);
};

export default EditTask;
