import Login from '../client/js/components/Login.jsx';
import React from 'react';
import { shallow } from 'enzyme';

describe('Login', () => {
  let wrapper = shallow(<Login />);

  it('should have the `div`', () => {
    const div = wrapper.find('div');
    expect(div.length).toEqual(1);
  });
  it('should have the `GoogleLogin`', () => {
    const googleLogin = wrapper.find('GoogleLogin');
    expect(googleLogin.length).toEqual(1);
  });
});