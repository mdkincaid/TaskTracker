// react
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, screen } from '@testing-library/react'

// project
import Task from './Task'

describe('Task', () => {
    it('should render correctly', () => {
        // arrange
        const task = {
            text: 'Test Task',
            date: '2021-06-01T16:30:00.000Z',
            reminder: false,
            id: 1,
        }
        const onDelete = () => {}
        const onToggle = () => {}
        const onEdit = () => {}
        const editing = 0
        const onEditSelect = () => {}

        // act
        const { container } = render(
            <Task
                task={task}
                onDelete={onDelete}
                onToggle={onToggle}
                onEdit={onEdit}
                editing={editing}
                onEditSelect={onEditSelect}
            />
        )

        // assert
        expect(container).toMatchSnapshot()
    })

    it('should render the task text', () => {
        // arrange
        const task = {
            text: 'Test Task',
            date: '2021-06-01T16:30:00.000Z',
            reminder: false,
            id: 1,
        }
        const onDelete = () => {}
        const onToggle = () => {}
        const onEdit = () => {}
        const editing = 0
        const onEditSelect = () => {}

        // act
        render(
            <Task
                task={task}
                onDelete={onDelete}
                onToggle={onToggle}
                onEdit={onEdit}
                editing={editing}
                onEditSelect={onEditSelect}
            />
        )

        // assert
        expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(task.text)
    })
})
