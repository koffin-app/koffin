import * as React from 'react';
import { shallow } from 'enzyme';
import BrokerModal from './brokerModal';

describe('<BrokerModal />', () => {
  test('renders', () => {
    const wrapper = shallow(<BrokerModal />);
    expect(wrapper).toMatchSnapshot();
  });
});
  