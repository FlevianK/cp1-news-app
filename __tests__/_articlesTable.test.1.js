import ArticlesTable from '../client/js/components/ArticlesTable.jsx';
import React from 'react';
import { shallow } from 'enzyme';

describe('ArticlesTable', () => {
    let wrapper = shallow(<ArticlesTable />);
    it('should have the `div`', () => {
        const div = wrapper.find('div');
        expect(div.length).toEqual(1);
    });
    it('should have the `h1` element', () => {
        const h1 = wrapper.find('h1');
        expect(h1.length).toEqual(1);
    });
    it('should have the `h2` element', () => {
        const h2 = wrapper.find('h2');
        expect(h2.length).toEqual(1);
    });
    it('should have the `Select` element', () => {
        const select = wrapper.find('Select');
        expect(select.length).toEqual(1);
    });
    it('should have the `BootstrapTable` element', () => {
        const bootstrapTable = wrapper.find('BootstrapTable');
        expect(bootstrapTable.length).toEqual(1);
    });
});
