import AppDispatcher from '../dispatchers/AppDispatcher';
import { EventEmitter } from 'events';
import AppConstants from '../constants/AppConstants';

const eventName = 'change';

export class AppStore extends EventEmitter {
  /**
 * Class to hold the AppStore cla.ss
 * @extends EventEmittert
 */
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

  setSources(source) {
    /**
   * The method that for handling sources change
   * @return {object} sets the state based on value
   */
    this.state.sources = source;
    this.emitChange(eventName);
  }
  getSource() {
    return this.state.sources;
  }

  setArticles(article) {
    console.log("set articles", this.state.articles)
    /**
   * The method that for handling articles change
   * @return {object} sets the state based on value
   */
    this.state.articles = article;
    this.emitChange(eventName);
  }
  getArticle() {
    console.log("get", this.state.articles)
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
