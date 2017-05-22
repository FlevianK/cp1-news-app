import AppDispatcher from '../dispatchers/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';
const axios = require('axios');

const apiUrl = 'https://newsapi.org/v1/';
const apiKey = `62db6ba454ee4700bfeedd7000a7c4d1`;

export default class AppActions {
    static getArticles(sourcesName, sortBy) {
        console.log('called');
        const url = ` https://newsapi.org/v1/articles?source=` + sourcesName + `&sortBy=` + sortBy + `&apiKey=${apiKey}`;

        axios.get(url)
            .then((response) => {
                console.log('afds');
                const articles = response.data.articles;
                AppDispatcher.dispatch({
                    actionType: 'GET_ARTICLES',
                    data: articles
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    static getSources(filterKey, filterValue) {
        const url = `https://newsapi.org/v1/sources?` + filterKey + `=` + filterValue;

        axios.get(url)
            .then((response) => {
                const sources = response.data.sources;
                AppDispatcher.dispatch({
                    actionType: 'GET_SOURCES',
                    data: sources
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
