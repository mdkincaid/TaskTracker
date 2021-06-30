// react
import React from 'react';

// third-party
import { shallow } from 'enzyme';

// project
import About from './About';

describe('About', () => {
	it('should render the About Component correctly', () => {
		// arrange / act
		let wrapped = shallow(<About></About>);
		
		// assert
		expect(wrapped).toMatchSnapshot();
	});
});
