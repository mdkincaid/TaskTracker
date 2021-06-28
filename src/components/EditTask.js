// react
import { useState } from 'react';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// third-party
import moment from 'moment';

const EditTask = ({ onEdit, task, setEditing }) => {
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
		setEditing('');
	};

	return (
		<div>
			<h3>Edit Task</h3>
			<form className='add-form' onSubmit={onSubmit}>
				<div className='form-control'>
					<label>Task</label>
					<input
						type='text'
						placeholder='Enter Task'
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
				<div className='form-control'>
					<label>Day & Time</label>
					<Datepicker
						wrapperClassName='datePicker'
						placeholderText='Enter Date & Time'
						selected={startDate}
						onChange={(date) => setStartDate(date)}
						dateFormat='MM/dd/yyyy h:mm aa'
						showTimeInput
						timeInputLabel='Time:'
						isClearable
					/>
				</div>
				<div className='form-control form-control-check'>
					<label>Set Reminder</label>
					<input
						type='checkbox'
						checked={reminder}
						value={reminder}
						onChange={(e) => setReminder(e.currentTarget.checked)}
					/>
				</div>

				<input
					type='submit'
					value='Save Task'
					className='btn btn-block'
				/>
			</form>
		</div>
	);
};

export default EditTask;
