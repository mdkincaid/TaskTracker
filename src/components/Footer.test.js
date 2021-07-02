// react
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// project
import Footer from './Footer';

describe('Footer', () => {
	it('should render', () => {
		const result = render(
			<Router>
				<Footer />
			</Router>
		);

		// assert
		expect(result.container).toMatchSnapshot();
	});
});
