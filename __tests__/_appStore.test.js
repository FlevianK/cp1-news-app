import AppDispatcher from '../client/js/dispatchers/AppDispatcher';
import AppStore from '../client/js/stores/AppStore';
import React from 'react';
import AppConstants from '../client/js/constants/AppConstants';

describe('Application store', () => {
    const articles = [];
    const sources = [];


    it('should have an emit change listener that is a function', () => {
        expect(typeof AppStore.emitChange).toBe('function');
    });
    it('should receive articles from Dispatcher', () => {
        const actual = AppStore.getAll();
        const expected = articles;
        expect(actual).toEqual(expected);
    });

});
