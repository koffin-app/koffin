import * as React from 'react';
import { shallow } from 'enzyme';
import Editor from './editor';

describe('<Editor />', () => {
  test('renders', () => {
    const wrapper = shallow(<Editor />);
    expect(wrapper).toMatchSnapshot();
  });
});
  