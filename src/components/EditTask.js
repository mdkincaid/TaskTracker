// react
import PropTypes from 'prop-types'
import { React, useState } from 'react'

// third-party
import moment from 'moment'

// project
import TaskInfoForm from './TaskInfoForm'

const EditTask = ({ onEdit, task, onEditSelect }) => {
    const dateString = moment(task.date).format('YYYY-MM-DD h:mm a')

    const [text, setText] = useState(task.text)
    const [reminder, setReminder] = useState(task.reminder)
    const [startDate, setStartDate] = useState(moment(dateString, 'YYYY-MM-DD h:mm a').toDate())

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            // eslint-disable-next-line no-alert
            alert('Please enter a task')
            return
        }

        const date = startDate.toISOString()

        const { id } = task

        onEdit({ text, date, reminder, id })
        onEditSelect('')
    }

    const onCancel = (e) => {
        e.preventDefault()
        onEditSelect('')
    }

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
            formType="Edit"
        />
    )
}

EditTask.propTypes = {
    onEdit: PropTypes.func.isRequired,
    task: PropTypes.shape({
        text: PropTypes.string,
        date: PropTypes.string,
        reminder: PropTypes.bool,
        id: PropTypes.number,
    }).isRequired,
    onEditSelect: PropTypes.func.isRequired,
}

export default EditTask
