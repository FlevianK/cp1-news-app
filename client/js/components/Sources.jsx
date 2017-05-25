import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import AppStore from '../stores/AppStore';
import AppActions from '../actions/AppActions';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const FILTERS = {
  country: {
    au: 'au',
    de: 'de',
    us: 'us'
  },
  language: {
    en: 'en',
    de: 'de',
    fr: 'fr'
  },
  category: {
    business: 'business',
    entertainment: 'entertainment',
    gaming: 'gaming',
    general: ' general',
    music: 'music',
    politics: 'politics',
    science_and_nature: 'science-and-nature',
    sport: 'sport',
    technology: 'technology'
  }
};

/**
 * Class to hold the SourcesComponent component.
 * @extends React.Component
 */
class SourcesComponent extends React.Component {
  /**
  * Set the Initial conditions for showing the News Content
  * @param {object} props - The properties of the SourcesComponent Class
  */
  constructor() {
    super();
    this.state = {
      sources: [],
      currentFilter: {
        filterKey: 'language',
        filterValue: 'en',
      },
      filters: FILTERS
    }
    this.onChange = this.onChange.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  /**
   * Invoked when the component mounted for the first time
   * @return {void} returns the initial state and props
   */
  componentDidMount() {
    AppActions.getSources(this.state.currentFilter.filterKey, this.state.currentFilter.filterValue);
    AppStore.addChangeListener(this.onChange);
  }

  /**
    * The method to set the state of the sources when there is a change
    */
  onChange() {
    this.setState({ sources: AppStore.getSource() });
  }

  /**
   * The method that for handling change
   * @return {object} sets the state based on value
   */
  handleFilterChange(event) {
    const { name, value } = event.target;

    this.setState((prevState) => {
      const newFilter = Object.assign({}, prevState.currentFilter, {
        [name]: value
      });
      return Object.assign({}, prevState, {
        currentFilter: newFilter
      });
    });

    AppActions.getSources(this.state.currentFilter.filterKey, this.state.currentFilter.filterValue);
    AppStore.addChangeListener(this.onChange);
  }
  options(sources) { // function that returns an object with options for my form = all sources
    this.sourcesMap = sources;
    return sources.map(source => ({
      value: `${source.id}`,
      label: source.name,
      description: source.description,
    }));
  }
  render() {
    const {
            filters,
      sources,
      currentFilter: {
                filterKey,
        filterValue
            }
        } = this.state;


    const sourceLinks = sources.map((source) => {
      return (
        <ul key={source.id}>
          <a
            id="sources-link"
            href="#"
            value={source.id}
            onClick={() => { this.props.handleSourceClick(source.id, source.name) }}
          >
            {source.name}
          </a>
        </ul >
      );
    });

    return (
      <div>
        <h1>{this.props.sourcesHeader}</h1>
        <Select
          name="form-field-name"
          options={this.options(this.state.sources)}
          value={this.props.currentValue}
          onChange={this.props.updateSearch}
          autofocus
          placeholder="Select News Source"
        />
        <select
          className="form-control c-select mb-2"
          name="filterKey"
          onChange={this.handleFilterChange}
          defaultValue={filterKey}
        >
          {Object.keys(filters).map(key => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
        <select
          className="form-control c-select"
          name="filterValue"
          onChange={this.handleFilterChange}
          defaultValue={filterValue}
        >
          {Object.keys(filters[filterKey]).map(key => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
        <div>
          {sourceLinks}
        </div>
      </div >
    );
  }
}

export default SourcesComponent;


// searchableData = {
//     sources: [],
//     articles: [],
//     authors: []
// }

// searchData = Object.assign([], searchableData, [...searchableData.sources, ...searchableData.articles, ...searchableData.authors])