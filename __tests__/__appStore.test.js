import React from 'react';
import { AppStore } from '../client/js/stores/AppStore';
import Dispatcher from '../client/js/dispatchers/AppDispatcher';
import AppConstants from '../client/js/constants/AppConstants.js';

describe('Application store', () => {
  const abc = new AppStore()
  it('Asserts sources is initially empty', () => {
    expect(abc.state.sources).toEqual([]);
  });
  it('Asserts sources is set', () => {
    expect(abc.getSource()).toEqual([]);
  });
  it('Asserts sources is set', () => {
    abc.setSources(['name: techruch'])
    expect(abc.state.sources).toEqual(["name: techruch"]);
  });
  it('Asserts sources is set', () => {
    expect(abc.getSource()).toEqual(["name: techruch"]);
  });
  it('Asserts articles is set', () => {
    expect(abc.getArticle()).toEqual([]);
  });
  it('Asserts articles is initially empty', () => {
    expect(abc.state.articles).toEqual([]);
  });
  it('Asserts artcles is set', () => {
    abc.setArticles(['name: techruch'])
    expect(abc.state.articles).toEqual(["name: techruch"]);
  });

  it('Asserts artcles is set', () => {
    expect(abc.getArticle()).toEqual(["name: techruch"]);
  });
});
