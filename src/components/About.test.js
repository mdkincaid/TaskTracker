// react
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// project
import About from './About';

describe('About', () => {
	it('should render', () => {
		const result = render(
			<Router>
				<About />
			</Router>
		);

		// assert
		expect(result.container).toMatchSnapshot();
	});

	it('should have display a version of 1.2.0', () => {
		// arrange / act
		render(
			<Router>
				<About />
			</Router>
		);

		// assert
		expect(screen.getByText('Version 1.2.0')).toBeInTheDocument();
	});
});
