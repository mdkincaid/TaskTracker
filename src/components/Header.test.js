// react
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// project
import Header from './Header';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useLocation: () => ({
		pathname: 'localhost:3000/example/path',
	}),
}));

describe('Header', () => {
	it('should render', () => {
		const result = render(<Header />);

		// assert
		expect(result.container).toMatchSnapshot();
	});

	describe('props', () => {
		it('should render a title of Task Tracker', () => {
			// arrange / act
			const title = 'Task Tracker';
			const result = render(<Header>{title}</Header>);

			// assert
			expect(result.getByText(title)).toBeTruthy()
		});

		// it('should render the FaPlus icon if showAdd is false', () => {
		// 	// arrange / act
		// 	const showAdd = false;
		// 	let wrapped = shallow(<Header showAdd={showAdd}></Header>);

		// 	// assert
		// 	expect(wrapped.find('FaPlus')).toBeDefined();
		// });

		// it('should render the FaMinus icon if showAdd is true', () => {
		// 	// arrange / act
		// 	const showAdd = true;
		// 	let wrapped = shallow(<Header showAdd={showAdd}></Header>);

		// 	// assert
		// 	expect(wrapped.find('FaMinus')).toBeDefined();
		// });
	});
});
