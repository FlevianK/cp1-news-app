import AppDispatcher from '../dispatchers/AppDispatcher';
import { EventEmitter } from 'events';
import AppConstants from '../constants/AppConstants';

const eventName = 'change';

class AppStore extends EventEmitter {
    constructor() {
        super();
        this.state = {
            sources: [],
            articles: []
        }
        this.dispatchToken = AppDispatcher.register(this.dispatcherCallback.bind(this));
        this.setSources = this.setSources.bind(this);
        this.setArticles = this.setArticles.bind(this);
    }
    emitChange(eventName) {
        this.emit(eventName);
    }
    //sources
    setSources(source) {
        this.state.sources = source;
        this.emitChange(eventName);
    }
    getSources() {
        return this.state.sources;
    }
    //articles
    setArticles(article) {
        this.state.articles = article;
        this.emitChange(eventName);
    }
    getArticles() {
        return this.state.articles;
    }
    addChangeListener(callback) {
        this.on(eventName, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(eventName, callback);
    }

    dispatcherCallback(action) {
        switch (action.actionType) {
            case 'SOURCES_SEARCH':
                this.soucreSearch(action.value);
                break;
            case 'GET_ARTICLES':
                this.setArticles(action.data);
                console.log("weeee", action.data)
                break;
            case 'GET_SOURCES':
                this.setSources(action.data);
        }

        return true;
    }
}

export default new AppStore();
