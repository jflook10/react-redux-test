import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';

import App from './App';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toHaveLength(1);
});


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });