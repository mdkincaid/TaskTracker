// react
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TaskInfoForm = ({
	onSubmit,
	onCancel,
	text,
	setText,
	reminder,
	setReminder,
	startDate,
	setStartDate,
	formType,
}) => {
	return (
		<div>
			<h3>{formType} Task</h3>
			<form aria-label={`${formType} task form`} className='add-form' onSubmit={onSubmit}>
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
				<div className='form-btn'>
					<input
						type='submit'
						value='Save Task'
						className='btn btn-block'
					/>
					{formType === 'Edit' && (
						<input
							type='submit'
							value='Cancel'
							className='btn btn-block'
							onClick={onCancel}
						/>
					)}
				</div>
			</form>
		</div>
	);
};

export default TaskInfoForm;
