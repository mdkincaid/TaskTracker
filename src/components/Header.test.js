// react
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { Route, Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

// third-party
import { createMemoryHistory } from 'history'

// project
import Header from './Header'

describe('Header', () => {
    it('should render', () => {
        // arrange
        const history = createMemoryHistory()
        const route = '/'
        const title = 'Test Title'
        const onAdd = () => {}
        const showAdd = false

        // act
        history.push(route)
        const { container } = render(
            <Router history={history}>
                <Route>
                    <Header title={title} onAdd={onAdd} showAdd={showAdd} />
                </Route>
            </Router>
        )

        // assert
        expect(container).toMatchSnapshot()
    })

    it('should render a title of Test when title is supplied', () => {
        // arrange
        const history = createMemoryHistory()
        const route = '/'
        const title = 'Test'
        const onAdd = () => {}
        const showAdd = false

        // act
        history.push(route)
        render(
            <Router history={history}>
                <Route>
                    <Header title={title} onAdd={onAdd} showAdd={showAdd} />
                </Route>
            </Router>
        )

        // assert
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Test')
    })

    it('should render the FaPlus icon if showAdd is false', () => {
        // arrange
        const history = createMemoryHistory()
        const route = '/'
        const title = 'Test'
        const onAdd = () => {}
        const showAdd = false

        // act
        history.push(route)
        const { container } = render(
            <Router history={history}>
                <Route>
                    <Header title={title} onAdd={onAdd} showAdd={showAdd} />
                </Route>
            </Router>
        )

        // assert
        expect(screen.getByRole('button', { name: 'show add task' })).toBeInTheDocument()
        expect(screen.queryByRole('button', { name: 'hide add task' })).not.toBeInTheDocument()
        expect(container).toMatchSnapshot()
    })

    it('should render the FaMinus icon if showAdd is true', () => {
        // arrange
        const history = createMemoryHistory()
        const route = '/'
        const title = 'Test'
        const onAdd = () => {}
        const showAdd = true

        // act
        history.push(route)
        const { container } = render(
            <Router history={history}>
                <Route path="/">
                    <Header title={title} onAdd={onAdd} showAdd={showAdd} />
                </Route>
            </Router>
        )

        // assert
        expect(screen.getByRole('button', { name: 'hide add task' })).toBeInTheDocument()
        expect(screen.queryByRole('button', { name: 'show add task' })).not.toBeInTheDocument()
        expect(container).toMatchSnapshot()
    })
})
