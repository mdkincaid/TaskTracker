// react
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'
import { Route, Router } from 'react-router-dom'

// third-party
import { createMemoryHistory } from 'history'

// project
import Footer from './Footer'

describe('Footer', () => {
    it('should render', () => {
        // arrange
        const history = createMemoryHistory()
        const route = '/'

        // act
        history.push(route)
        const { container } = render(
            <Router history={history}>
                <Route>
                    <Footer />
                </Route>
            </Router>
        )

        // assert
        expect(container).toMatchSnapshot()
    })
})
