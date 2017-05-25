import React, { Component } from 'react';
import Articles from './Articles.jsx';
import Sources from './Sources.jsx';
import { Row, Col } from 'react-bootstrap';

/**
 * Class to hold the ContentComponent component.
 * @extends React.Component
 */
class ContentComponent extends Component {
  /**
  * Set the Initial conditions for showing the News Applications
  * @param {object} props - The properties of the ContentComponent Class
  */
  constructor(props, context) {
    super(props, context);
    this.state = {
      sourceId: 'techcrunch',
      sourceName: 'Techcrunch',
      currentValue: '',
    }
    this.updateSearch = this.updateSearch.bind(this);
    this.handleSourceClick = this.handleSourceClick.bind(this);
  }

  /**
    * The method that for handling change
    * @return {object} sets the state based on value
    */
  handleSourceClick(sourcesId, sourcesName) {
    const sourceId = sourcesId;
    const sourceName = sourcesName;
    this.setState({
      sourceName: sourceName,
      sourceId: sourceId
    });
  }

  /**
  * The method that for handling change
  * @return {object} sets the state based on value
  */
  updateSearch(event) {
    this.setState({
      sourceId: event.value,
      sourceName: event.label
    });
  }


  render() {
    return (
      <Row id="content">
        <Col xs={12} sm={12} md={4} lg={3}>
          <Sources sourcesHeader="Sources" handleSourceClick={this.handleSourceClick} updateSearch={this.updateSearch} />
        </Col>
        <Col xs={12} sm={12} md={8} lg={8}>
          <Articles sourceName={this.state.sourceName} sourceId={this.state.sourceId} />
        </Col>
      </Row>
    );
  }
}

export default ContentComponent;