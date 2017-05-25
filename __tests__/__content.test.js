import Content from '../client/js/components/Content.jsx';
import React from 'react';
import { shallow, mount } from 'enzyme';

describe('Content', () => {
  let wrapper = shallow(<Content />);

  it('should have the `Row`', () => {
    const row = wrapper.find('Row');
    expect(row.length).toEqual(1);
  });
  it('should have the `Column`', () => {
    const col = wrapper.find('Col');
    expect(col.length).toEqual(2);
  });

});
