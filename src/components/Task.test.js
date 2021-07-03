// react
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// project
import Task from './Task';

describe('Task', () => {
	it('should render correctly', () => {
		// arrange
		const task = {
			text: 'Test Task',
			date: '2021-06-01T20:30:00.000Z',
			reminder: false,
			id: 1,
		};

		// act
		const { container } = render(<Task task={task} />);

		// assert
		expect(container).toMatchSnapshot();
	});

	it('should render the task text', () => {
		// arrange
		const task = {
			text: 'Test Task',
			date: '2021-06-01T20:30:00.000Z',
			reminder: false,
			id: 1,
		};

		// act
		render(<Task task={task} />);

		// assert
		expect(screen.getByRole('heading', {level: 3}).textContent).toBe(task.text);
	});
});
