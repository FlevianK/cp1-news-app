import ToggleableArticles from '../client/js/components/ToggleableArticles.jsx';
import React from 'react';
import { shallow } from 'enzyme';

describe('ToggleableArticles', () => {
    let wrapper = shallow(<ToggleableArticles />);

    it('should have the `div`', () => {
        const div = wrapper.find('div');
        expect(div.length).toEqual(1);
    });
    it('should have the `ArticlesTable` component', () => {
        const articlesTable = wrapper.find('ArticlesTable');
        expect(articlesTable.length).toEqual(1);
        // expect(
        //     wrapper.containsMatchingElement('<ArticlesTable />')).toBe(true);
    });
    // it('should have the `Articles` component', () => {
    //     expect(
    //         wrapper.containsMatchingElement('<Articles />')).toBe(true);
    // });
});