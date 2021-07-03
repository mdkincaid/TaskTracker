// react
import React from 'react';
import { Router, Route } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

// third-party
import { createMemoryHistory } from 'history';

// project
import Footer from './Footer';

describe('Footer', () => {
	it('should render', () => {
		// arrange
		const history = createMemoryHistory();
		const route = '/';

		// act
		history.push(route);
		const { container } = render(
			<Router history={history}>
				<Route>
					<Footer />
				</Route>
			</Router>
		);

		// assert
		expect(container).toMatchSnapshot();
	});
});
