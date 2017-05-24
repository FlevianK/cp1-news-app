import Sources from '../client/js/components/Sources.jsx';
import React from 'react';
import { shallow } from 'enzyme';

describe('Sources', () => {
    let wrapper = shallow(<Sources />);

    it('should have the `div`', () => {
        const div = wrapper.find('div');
        expect(div.length).toEqual(2);
    });
    it('should have the `h1` element', () => {
        const h1 = wrapper.find('h1');
        expect(h1.length).toEqual(1);
    });
    it('should have the `Select` element', () => {
        const select = wrapper.find('Select');
        expect(select.length).toEqual(1);
    });
    it("asserts that sources state is instatiated as an empty array", () => {
        const wrapper = shallow(<Sources />);

        expect(wrapper.state().sources).toEqual([]);
        expect(wrapper.find('#sources').length).toEqual(0); //test that the div has no data before setstate
    })
});