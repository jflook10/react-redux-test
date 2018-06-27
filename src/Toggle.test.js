import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Toggle from './Toggle';


describe('Toggle visbility', () => {
	it('should render text when toggle true', () =>{
		const wrapper = mount(
			<Toggle />
		);
		expect(wrapper.html()).toBe(null)
		wrapper.unmount();
	})
});
