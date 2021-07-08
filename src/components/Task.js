// react
import PropTypes from 'prop-types'
import React from 'react'
import { FaEdit, FaTimes } from 'react-icons/fa'

// third-party
import moment from 'moment'

// project
import EditTask from './EditTask'

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
                    <div className="task-header">
                        <h3>{task.text}</h3>
                        <button
                            type="button"
                            aria-label={`edit task ${task.id}`}
                            style={{
                                marginLeft: 'auto',
                                cursor: 'pointer',
                            }}
                            onClick={() => onEditSelect(task.id)}
                        >
                            <FaEdit size={20} />
                        </button>
                        <button
                            type="button"
                            aria-label={`delete task ${task.id}`}
                            style={{
                                color: 'red',
                                cursor: 'pointer',
                            }}
                            onClick={() => onDelete(task.id)}
                        >
                            <FaTimes size={20} />
                        </button>
                    </div>
                    <p>{`${moment.utc(task.date).format('dddd MMM Do [at] h:mma')} UTC`}</p>
                </div>
            )}
        </div>
    )
}

Task.propTypes = {
    task: PropTypes.shape({
        text: PropTypes.string,
        date: PropTypes.string,
        reminder: PropTypes.bool,
        id: PropTypes.number,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    editing: PropTypes.number.isRequired,
    onEditSelect: PropTypes.func.isRequired,
}

export default Task
