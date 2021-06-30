// react
import React from 'react';

// third-party
import { shallow } from 'enzyme';

// project
import Footer from './Footer';

describe('Footer', () => {
	it('should render the Footer Component correctly', () => {
		// arrange / act
		let wrapped = shallow(<Footer></Footer>);

		// assert
		expect(wrapped).toMatchSnapshot();
	});
});
