import * as React from 'react';
import { shallow } from 'enzyme';
import Consume from './consume';

describe('<Consume />', () => {
  test('renders', () => {
    const wrapper = shallow(<Consume />);
    expect(wrapper).toMatchSnapshot();
  });
});
  