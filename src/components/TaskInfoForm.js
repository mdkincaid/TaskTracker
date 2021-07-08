// react
import 'react-datepicker/dist/react-datepicker.css'
import Datepicker from 'react-datepicker'
import PropTypes from 'prop-types'
import React from 'react'

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
            <form aria-label={`${formType} task form`} className="add-form" onSubmit={onSubmit}>
                <div className="form-control">
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="input -task-text">Task</label>
                    <input
                        id="input-task-text"
                        type="text"
                        placeholder="Enter Task"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="input-task-date">Day & Time</label>
                    <Datepicker
                        id="input-task-date"
                        wrapperClassName="datePicker"
                        placeholderText="Enter Date & Time"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="MM/dd/yyyy h:mm aa"
                        showTimeInput
                        timeInputLabel="Time:"
                        isClearable
                    />
                </div>
                <div className="form-control form-control-check">
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="input-task-reminder">Set Reminder</label>
                    <input
                        id="input-task-reminder"
                        type="checkbox"
                        checked={reminder}
                        value={reminder}
                        onChange={(e) => setReminder(e.currentTarget.checked)}
                    />
                </div>
                <div className="form-btn">
                    <input type="submit" value="Save Task" className="btn btn-block" />
                    {formType === 'Edit' && (
                        <input
                            type="submit"
                            value="Cancel"
                            className="btn btn-block"
                            onClick={onCancel}
                        />
                    )}
                </div>
            </form>
        </div>
    )
}

TaskInfoForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    setText: PropTypes.func.isRequired,
    reminder: PropTypes.bool.isRequired,
    setReminder: PropTypes.func.isRequired,
    startDate: PropTypes.string.isRequired,
    setStartDate: PropTypes.func.isRequired,
    formType: PropTypes.string.isRequired,
}

export default TaskInfoForm
