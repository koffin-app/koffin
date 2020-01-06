import * as React from 'react';
import { shallow } from 'enzyme';
import Produce from './produce';

describe('<Produce />', () => {
  test('renders', () => {
    const wrapper = shallow(<Produce />);
    expect(wrapper).toMatchSnapshot();
  });
});
  