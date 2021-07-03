// react
import React from 'react';
import { Router, Route } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

// third-party
import { createMemoryHistory } from 'history';

// project
import Header from './Header';

describe('Header', () => {
	it('should render', () => {
		// arrange
		const history = createMemoryHistory();
		const route = '/';

		// act
		history.push(route);
		const { container } = render(
			<Router history={history}>
				<Route>
					<Header />
				</Route>
			</Router>
		);

		// assert
		expect(container).toMatchSnapshot();
	});

	it('should render the default title of Task Tracker if no title is supplied', () => {
		// arrange
		const history = createMemoryHistory();
		const route = '/';

		// act
		history.push(route);
		render(
			<Router history={history}>
				<Route>
					<Header></Header>
				</Route>
			</Router>
		);

		// assert
		expect(screen.getByRole('heading', 1).textContent).toBe('Task Tracker');
	});

	it('should render the title of Test when title is supplied', () => {
		// arrange
		const history = createMemoryHistory();
		const title = 'Test';
		const route = '/';

		// act
		history.push(route);
		render(
			<Router history={history}>
				<Route>
					<Header title={title} />
				</Route>
			</Router>
		);

		// assert
		expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Test');
	});

	it('should render the FaPlus icon if showAdd is false', () => {
		// arrange
		const history = createMemoryHistory();
		const showAdd = false;
		const route = '/';

		// act
		history.push(route);
		const { container } = render(
			<Router history={history}>
				<Route>
					<Header showAdd={showAdd} />
				</Route>
			</Router>
		);

		// assert
		expect(screen.getByRole('button', { name: 'show-add-task' })).toBeInTheDocument();
		expect(screen.queryByRole('button', { name: 'hide-add-task' })).not.toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});

	it('should render the FaMinus icon if showAdd is true', () => {
		// arrange
		const history = createMemoryHistory();
		const showAdd = true;
		const route = '/';

		// act
		history.push(route);
		const { container } = render(
			<Router history={history}>
				<Route path='/'>
					<Header showAdd={showAdd} />
				</Route>
			</Router>
		);

		// assert
		expect(screen.getByRole('button', { name: 'hide-add-task' })).toBeInTheDocument();
		expect(screen.queryByRole('button', { name: 'show-add-task' })).not.toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});
});
