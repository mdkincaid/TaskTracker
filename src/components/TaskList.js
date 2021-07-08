// react
import PropTypes from 'prop-types'
import { React, useState } from 'react'

// project
import Task from './Task'

const TaskList = ({ tasks, onDelete, onToggle, onEdit }) => {
    const [editing, setEditing] = useState('')

    const onEditSelect = (id) => {
        setEditing(id)
    }

    return (
        <>
            {tasks.map((task) => (
                <Task
                    aria-label={`task ${task.id}`}
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                    onEdit={onEdit}
                    editing={editing}
                    onEditSelect={onEditSelect}
                />
            ))}
        </>
    )
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            date: PropTypes.string,
            reminder: PropTypes.bool,
            id: PropTypes.number,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
}

export default TaskList
