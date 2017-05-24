import Sources from '../client/js/components/Sources.jsx';
import React from 'react';
import { shallow, mount } from 'enzyme';

describe('Sources', () => {
    let sourceslist;

    beforeEach(() => {
        sourceslist = shallow(<Sources sources={[{
            "id": "al-jazeera-english",
            "name": "Al Jazeera English",
            "url": "Al-Jazeera-English.com"
        }, {
            "id": "ars-technica",
            "name": "Ars Technica",
            "url": "Ars-Technica.com"
        }, {
            "id": "associated-press",
            "name": "Associated Press",
            "url": "Associated-Press.com"
        }]} />);
    });
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
    });
    it('should display Sources', () => {
        let mockDisplay = jest.fn();
        const wrapper = mount(<Sources getSources={mockDisplay} />);
        expect(wrapper).toBeDefined();
    });

    it('asserts that source state is initialized', () => {
        const wrapper = shallow(<Sources />);
        expect(wrapper.state().sources).toEqual([]);
        expect(wrapper.find('#sources-link').length).toEqual(0);
    });

    it('asserts that when state is set', () => {
        const wrapper = shallow(<Sources />);
        wrapper.setState({
            sources: [
                {
                    name: "bbc",
                    id: 1
                },
                {
                    name: "cnn",
                    id: 2
                }
            ]
        });
        expect(wrapper.state().sources.length).toBeGreaterThan(1);
        expect(wrapper.find('#source-link').length).toBeDefined();
    });

});