import App from '../client/js/components/App.jsx';
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('App', () => {
    let wrapper = shallow(<App />);
    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();

    it('should have the `div`', () => {
        const div = wrapper.find('div');
        expect(div.length).toEqual(1);
    });
    it('should have the `Grid`', () => {
        expect(wrapper.find('Grid').length).toEqual(1);
    });
});
