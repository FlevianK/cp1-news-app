import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import AppStore from '../stores/AppStore.js';
import AppActions from '../actions/AppActions.js';
import Select from 'react-select';
import PropTypes from 'prop-types';

const options = [
  { value: "top", label: "Top" },
  { value: "latest", label: "Latest" },
  { value: "popular", label: "Popular" }
]

/**
 * Class to hold the ArticlesComponent component.
 * @extends React.Component
 */
class ArticlesComponent extends React.Component {
  /**
  * Set the Initial conditions for showing the News Content
  * @param {object} props - The properties of the ArticlesComponent Class
  */
  constructor(props, context) {
    super(props, context);
    this.state = {
      sourceId: this.props.sourcesId,
      articles: [],
      sortBy: "top",
      clearable: false,
      isOpen: this.props.isOpen
    }
    this.onChange = this.onChange.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
  }

  /**
   * Invoked when the component mounted for the first time
   * @return {void} returns the initial state and props
   */
  componentDidMount() {
    AppActions.getArticle(this.props.sourceId, this.state.sortBy);
    AppStore.addChangeListener(this.onChange);
  }

  /**
     * Invoked immediately after props changes and rerender the component
     * @return {void} returns the initiall state and new props
     */
  componentWillReceiveProps() {
    AppActions.getArticle(this.props.sourceId, this.state.sortBy);
    AppStore.addChangeListener(this.onChange);
  }

  /**
  * The method to set the state of the articles when there is a change
  */
  onChange() {
    this.setState({ articles: AppStore.getArticle() });
  }

  /**
   * The method that for handling change
   * @return {object} sets the state based on value
   */
  handleOptions(event) {
    const sortBy = event.value;
    this.setState({
      sortBy: sortBy
    });
    AppActions.getArticle(this.props.sourceId, sortBy);
    AppStore.addChangeListener(this.onChange);
  }

  handleUrl(value, row, index) {
    return "<a href=" + row.url + " target='_black'>" + value + "</a>";
  }


  render() {
    const { articles } = this.state;

    return (
      <div id="articles">
        <h1>{this.props.articlesTableHeader}</h1>
        <h2>{this.props.sourceName}</h2>
        <Select
          options={options}
          value={this.state.sortBy}
          onChange={this.handleOptions}
          clearable={this.state.clearable}
        ></Select>

        <BootstrapTable id="article" data={articles} striped={true} hover={true}>
          <TableHeaderColumn dataField="author" isKey={true} dataSort={true}>Article author</TableHeaderColumn>
          <TableHeaderColumn dataField="title" dataSort={true}>Article Title</TableHeaderColumn>
          <TableHeaderColumn dataField="description" dataSort={true} dataFormat={this.handleUrl}>Article Description</TableHeaderColumn>
          <TableHeaderColumn dataField="publishedAt" dataSort={true}>Published At</TableHeaderColumn>
        </BootstrapTable>

      </div>
    );
  }
}
ArticlesComponent.propTypes = {
  sourceName: PropTypes.string,
  sourceId: PropTypes.string,
};

export default ArticlesComponent;