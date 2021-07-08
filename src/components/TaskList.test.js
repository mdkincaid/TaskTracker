// react
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import userEvent from '@testing-library/user-event'
import { Route, Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

// third-party
import { createMemoryHistory } from 'history'

// project
import TaskList from './TaskList'

describe('TaskList', () => {
    it('should render', () => {
        // arrange
        const tasks = [
            {
                text: 'Fake Task #1',
                date: '2021-06-01T16:30:00.000Z',
                reminder: false,
                id: 1,
            },
            {
                text: 'Fake Task #2',
                date: '2021-06-17T21:30:00.000Z',
                reminder: false,
                id: 2,
            },
        ]
        const history = createMemoryHistory()
        const route = '/'

        // act
        history.push(route)
        const { container } = render(
            <Router history={history}>
                <Route>
                    <TaskList tasks={tasks} />
                </Route>
            </Router>
        )

        // assert
        expect(container).toMatchSnapshot()
    })

    it('should render 2 tasks when 2 tasks are supplied', () => {
        // arrange
        const tasks = [
            {
                text: 'Fake Task #1',
                date: '2021-06-01T20:30:00.000Z',
                reminder: false,
                id: 1,
            },
            {
                text: 'Fake Task #2',
                date: '2021-06-17T01:30:00.000Z',
                reminder: false,
                id: 2,
            },
        ]
        const history = createMemoryHistory()
        const route = '/'

        // act
        history.push(route)
        render(
            <Router history={history}>
                <Route>
                    <TaskList tasks={tasks} />
                </Route>
            </Router>
        )

        // assert
        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2)
    })

    it('should render the Edit Task form when the user clicks on the edit task button for a task', () => {
        // arrange
        const tasks = [
            {
                text: 'Fake Task #1',
                date: '2021-06-01T20:30:00.000Z',
                reminder: false,
                id: 1,
            },
            {
                text: 'Fake Task #2',
                date: '2021-06-17T01:30:00.000Z',
                reminder: false,
                id: 2,
            },
        ]
        const history = createMemoryHistory()
        const route = '/'

        // act
        history.push(route)
        render(
            <Router history={history}>
                <Route path="/">
                    <TaskList tasks={tasks} />
                </Route>
            </Router>
        )

        // assert
        expect(screen.getByText('Fake Task #1')).toBeInTheDocument()
        expect(screen.getByText('Fake Task #2')).toBeInTheDocument()
        expect(screen.queryByRole('form', { name: 'Edit task form' })).not.toBeInTheDocument()
        userEvent.click(screen.getByRole('button', { name: 'edit task 1' }))
        expect(screen.queryByRole('button', { name: 'edit task 1' })).not.toBeInTheDocument()
        expect(screen.getByRole('form', { name: 'Edit task form' })).toBeInTheDocument()
        expect(screen.getByText('Fake Task #2')).toBeInTheDocument()
    })
})
