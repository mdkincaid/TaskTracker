// react
import React from 'react';
import { Router, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

// project
import Tasks from './Tasks';

describe('Tasks', () => {
	it('should render', () => {
		// arrange / act
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
		];
		const history = createMemoryHistory();
		const route = '/';
		history.push(route);
		const result = render(
			<Router history={history}>
				<Route>
					<Tasks tasks={tasks} />
				</Route>
			</Router>
		);

		// assert
		expect(result.container).toMatchSnapshot();
	});

	it('should render 3 tasks when 3 tasks are supplied', () => {
		// arrange / act
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
		];
		const history = createMemoryHistory();
		const route = '/';
		history.push(route);
		const result = render(
			<Router history={history}>
				<Route>
					<Tasks tasks={tasks} />
				</Route>
			</Router>
		);

		// assert
		expect(result.container.getElementsByClassName('task').length).toBe(2);
	});

	it('should render a 4th task when one is added', () => {
		// arrange / act
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
		];
		const history = createMemoryHistory();
		const route = '/';
		history.push(route);
		const result = render(
			<Router history={history}>
				<Route>
					<Tasks tasks={tasks} />
				</Route>
			</Router>
		);

		// assert
		expect(result.container.getElementsByClassName('task').length).toBe(2);

		tasks.push({
			text: 'Fake Task #3',
			date: '2021-06-01T20:30:00.000Z',
			reminder: false,
			id: 3,
		});

		result.rerender(
			<Router history={history}>
				<Route>
					<Tasks tasks={tasks} />
				</Route>
			</Router>
		);

		// assert
		expect(result.container.getElementsByClassName('task').length).toBe(3);
	});

	it('should only render 2 tasks when 1 is deleted', () => {
		// arrange / act
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
		];
		const history = createMemoryHistory();
		const route = '/';
		history.push(route);
		const result = render(
			<Router history={history}>
				<Route>
					<Tasks tasks={tasks} />
				</Route>
			</Router>
		);

		// assert
		expect(result.container.getElementsByClassName('task').length).toBe(2);

		tasks.pop();

		result.rerender(
			<Router history={history}>
				<Route>
					<Tasks tasks={tasks} />
				</Route>
			</Router>
		);

		// assert
		expect(result.container.getElementsByClassName('task').length).toBe(1);
	});

	it('temp name', () => {
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
		];
		const history = createMemoryHistory();
		const route = '/';

		// act
		history.push(route);
		render(
			<Router history={history}>
				<Route path='/'>
					<Tasks tasks={tasks} />
				</Route>
			</Router>
		);

		// assert
		expect(screen.getByText('Fake Task #1')).toBeInTheDocument();
		expect(screen.getByText('Fake Task #2')).toBeInTheDocument();
		userEvent.click(screen.getByRole('button', {name: 'edit task 1'}));
		expect(screen.queryByRole('button', {name: 'edit task 1'})).not.toBeInTheDocument();
		expect(screen.getByText('Fake Task #2')).toBeInTheDocument();
	});
});
