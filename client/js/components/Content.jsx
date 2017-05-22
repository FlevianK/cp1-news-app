import React, { Component } from 'react';
import ToggleableArticles from './ToggleableArticles.jsx';
import Sources from './Sources.jsx';
import { Row, Col } from 'react-bootstrap';

class ContentComponent extends Component {
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

    handleSourceClick(sourcesId, sourcesName) {
        const sourceId = sourcesId;
        const sourceName = sourcesName;
        this.setState({
            sourceName: sourceName,
            sourceId: sourceId
        });
    }
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
                    <ToggleableArticles sourceName={this.state.sourceName} sourceId={this.state.sourceId} />
                </Col>
            </Row>
        );
    }
}

export default ContentComponent;