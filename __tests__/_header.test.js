import Header from '../client/js/components/Header.jsx';
import React from 'react';
import { shallow } from 'enzyme';

describe('Header', () => {
    let wrapper = shallow(<Header />);

    it('should have the `Row`', () => {
        const row = wrapper.find('Row');
        expect(row.length).toEqual(1);
    });
    it('should have the `Column`', () => {
        const col = wrapper.find('Col');
        expect(col.length).toEqual(2);
    });
    it('should have the `h1` element', () => {
        const h1 = wrapper.find('h1');
        expect(h1.length).toEqual(1);
    });
    it('should have the `NewsSearch component`', () => {
        expect(
            wrapper.containsMatchingElement('<NewsSearch />')).toBe(true);
    });
    it('should have the `Login component`', () => {
        expect(
            wrapper.containsMatchingElement('<Login />')).toBe(true);
    });
});