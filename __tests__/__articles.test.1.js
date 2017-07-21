import Articles from '../client/js/components/Articles.jsx';
import React from 'react';
import { shallow, mount } from 'enzyme';

describe('Articles', () => {
  let wrapper = shallow(<Articles />);
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
  it('should display Articles', () => {
    let mockDisplay = jest.fn();
    const wrapper = mount(<Articles getArticle={mockDisplay} />);
    expect(wrapper).toBeDefined();
  });
  it('should display Articles', () => {
    let mockDisplay = jest.fn();
    const wrapper = mount(<Articles handleOptions={mockDisplay} />);
    expect(wrapper).toBeDefined();
  });
  it('asserts that article state is initialized', () => {
    const wrapper = shallow(<Articles />);
    expect(wrapper.state().sortBy).toEqual("top");
  });

  it('asserts that when state is set', () => {
    const wrapper = shallow(<Articles />);
    wrapper.setState({
      sortBy: "latest"
    });
    expect(wrapper.state().sortBy).toEqual("latest");
    expect(wrapper.find('#article').length).toBeDefined();
  });
});
