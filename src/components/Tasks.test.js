// react
import React from 'react';

// third-party
import { shallow } from 'enzyme';

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
	it('should render the Tasks Component correctly', () => {
		// arrange / act
		let wrapped = shallow(<Tasks tasks={tasks}></Tasks>);

		// assert
		expect(wrapped).toMatchSnapshot();
	});

	it('should render 3 tasks when 3 tasks are supplied', () => {
		// arrange / act
		let wrapped = shallow(<Tasks tasks={tasks}></Tasks>);
		const expectedCount = tasks.length;

		// assert
		expect(wrapped.find('Task').length).toEqual(expectedCount);
	});

	it('should clear the value of editing when the task id matches editing', () => {
		// TODO(): figure out how to test setEditStatus
	});
});
