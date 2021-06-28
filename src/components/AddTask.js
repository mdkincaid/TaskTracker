// react
import { useState } from 'react';

// project
import TaskInfoForm from './TaskInfoForm';

const AddTask = ({ onAdd }) => {
	const [text, setText] = useState('');
	const [reminder, setReminder] = useState(false);
	const [startDate, setStartDate] = useState(null);

	const onSubmit = (e) => {
		e.preventDefault();

		if (!text) {
			alert('Please enter a task');
			return;
		}

		const date = startDate;

		onAdd({ text, date, reminder });

		setText('');
		setStartDate(null);
		setReminder(false);
	};

	return (
		<TaskInfoForm
			onSubmit={onSubmit}
			text={text}
			setText={setText}
			reminder={reminder}
			setReminder={setReminder}
			startDate={startDate}
			setStartDate={setStartDate}
			formType={'Add'}
		/>
	);
};

export default AddTask;
