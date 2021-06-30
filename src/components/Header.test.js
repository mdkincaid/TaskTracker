// react
import React from 'react';

// third-party
import { shallow } from 'enzyme';

// project
import Header from './Header';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useLocation: () => ({
		pathname: 'localhost:3000/example/path',
	}),
}));

describe('Header', () => {
	it('should render the Header Component correctly', () => {
		// arrange / act
		let wrapped = shallow(<Header></Header>);

		// assert
		expect(wrapped).toMatchSnapshot();
	});

	describe('props', () => {
		it('should render a title of Task Tracker', () => {
			// arrange / act
			const title = 'Task Tracker';
			let wrapped = shallow(<Header>{title}</Header>);

			// assert
			expect(wrapped.find('h1').text()).toEqual(title);
		});

		it('should render the FaPlus icon if showAdd is false', () => {
			// arrange / act
			const showAdd = false;
			let wrapped = shallow(<Header showAdd={showAdd}></Header>);

			// assert
			expect(wrapped.find('FaPlus')).toBeDefined();
		});

		it('should render the FaMinus icon if showAdd is true', () => {
			// arrange / act
			const showAdd = true;
			let wrapped = shallow(<Header showAdd={showAdd}></Header>);

			// assert
			expect(wrapped.find('FaMinus')).toBeDefined();
		});
	});
});
