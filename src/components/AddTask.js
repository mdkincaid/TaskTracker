// react
import { useState } from 'react';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// third-party
import moment from 'moment';

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

		const date = moment(startDate).format('dddd MMM Do [at] h:mma');

		onAdd({ text, date, reminder });

		setText('');
		setStartDate(null);
		setReminder(false);
	};

	return (
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

			<input type='submit' value='Save Task' className='btn btn-block' />
		</form>
	);
};

export default AddTask;
