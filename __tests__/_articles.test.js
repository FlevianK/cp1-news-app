import Articles from '../client/js/components/Articles.jsx';
import React from 'react';
import { shallow } from 'enzyme';

describe('Articles', () => {
    let wrapper = shallow(<Articles />);

    it('should have the `div`', () => {
        const div = wrapper.find('div');
        expect(div.length).toEqual(1);
    });
    // it('should have the `Iframe` element', () => {
    //     expect(
    //         wrapper.containsMatchingElement('<Iframe />')).toBe(true);
    // });
});