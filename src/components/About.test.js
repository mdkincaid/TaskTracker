// react
import React from 'react';
import { Router, Route } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

// third-party
import { createMemoryHistory } from 'history';

// project
import About from './About';

describe('About', () => {
	it('should render', () => {
		// arrange
		const history = createMemoryHistory();
		const route = '/';

		// act
		history.push(route);
		const { container } = render(
			<Router history={history}>
				<Route path='/about'>
					<About />
				</Route>
			</Router>
		);

		// assert
		expect(container).toMatchSnapshot();
	});

	it('should dispaly proper version of 1.2.0', () => {
		// arrange
		const history = createMemoryHistory();
		const route = '/';

		// act
		history.push(route);
		render(
			<Router history={history}>
				<Route>
					<About />
				</Route>
			</Router>
		);

		// assert
		expect(screen.getByText('Version 1.2.0')).toBeInTheDocument();
	});
});
