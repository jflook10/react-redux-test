import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai'; //try adding to remove .find error
import Toggle from './Toggle';


describe('Toggle visbility', () => {
	let wrapper;
	beforeEach(() => { wrapper = shallow(<Toggle/>); })
	it('should render text when toggle true', () =>{
		expect(wrapper.find('div.div-toggle')).to.have.length(1)

		// wrapper.unmount();
	})
});
