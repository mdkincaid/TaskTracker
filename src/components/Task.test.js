// react
import React from 'react';

// third-party
import { shallow } from 'enzyme';

// project
import Task from './Task';

const task = {
	text: 'Test Task',
	date: '2021-06-01T20:30:00.000Z',
	reminder: false,
	id: 14,
};

describe('Task', () => {
	it('should render the Task Component correctly', () => {
		// arrange / act
		let wrapped = shallow(<Task task={task}></Task>);

		// assert
		expect(wrapped).toMatchSnapshot();
	});

	it('should render the Edit Task child component when the task.id matches editing', () => {
		// arrange
		const editing = 14;

		// act
		let wrapped = shallow(<Task task={task} editing={editing}></Task>)

		// assert
		expect(wrapped.find('EditTask')).toBeDefined();
	});

	it('should render the task text', () => {
		// arrange / act
		let wrapped = shallow(<Task task={task}></Task>);

		// assert
		expect(wrapped.find('h3').text()).toContain(task.text);
	});
});
