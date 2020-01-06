import * as React from 'react';
import { shallow } from 'enzyme';
import Logging from './logging';

describe('<Logging />', () => {
  test('renders', () => {
    const wrapper = shallow(<Logging />);
    expect(wrapper).toMatchSnapshot();
  });
});
  