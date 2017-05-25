import AppDispatcher from '../dispatchers/AppDispatcher';
import { EventEmitter } from 'events';
import AppConstants from '../constants/AppConstants';

const eventName = 'change';

/**
 * Class to hold the AppStore cla.ss
 * @extends EventEmittert
 */
export class AppStore extends EventEmitter {
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
  /**
   * The method that for handling sources change
   * @return {object} sets the state based on value
   */
  setSources(source) {
    this.state.sources = source;
    this.emitChange(eventName);
  }
  getSource() {
    return this.state.sources;
  }

  /**
   * The method that for handling articles change
   * @return {object} sets the state based on value
   */
  setArticles(article) {
    this.state.articles = article;
    this.emitChange(eventName);
  }
  getArticle() {
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
      case 'GET_ARTICLES':
        this.setArticles(action.data);
        break;
      case 'GET_SOURCES':
        this.setSources(action.data);
    }

    return true;
  }
}

const instantiatedStore = new AppStore()

export default new AppStore();
