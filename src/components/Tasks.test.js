// react
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// project
import Tasks from './Tasks';

const tasks = [
	{
		text: 'Test Task',
		date: '2021-06-01T20:30:00.000Z',
		reminder: false,
		id: 14,
	},
	{
		text: 'Food Shopping',
		date: '2021-06-17T01:30:00.000Z',
		reminder: false,
		id: 15,
	},
	{
		text: 'Test',
		date: '2021-06-10T04:00:00.000Z',
		reminder: false,
		id: 16,
	},
];

describe('Tasks', () => {
	it('should render', () => {
		const result = render(<Tasks tasks={tasks} />);

		// assert
		expect(result.container).toMatchSnapshot();
	});

	it('should render 3 tasks when 3 tasks are supplied', () => {
		const result = render(<Tasks tasks={tasks} />);

		// assert
		expect(result.container.getElementsByClassName('task').length).toBe(3);
	});
});
