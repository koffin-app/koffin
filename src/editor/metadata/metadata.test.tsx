import * as React from 'react';
import { shallow } from 'enzyme';
import Metadata from './metadata';

describe('<Metadata />', () => {
  test('renders', () => {
    const wrapper = shallow(<Metadata />);
    expect(wrapper).toMatchSnapshot();
  });
});
  