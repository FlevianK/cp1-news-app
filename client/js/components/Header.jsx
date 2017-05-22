import React from 'react';
import Button from './Login.jsx';
import { Row, Col } from 'react-bootstrap';

class HeaderComponent extends React.Component {
    render() {
        return (
            <Row id="header">
                <Col xs={12} sm={12} md={6} lg={6}>
                    <h1>{this.props.header}</h1>
                </Col>
                <Col xs={6} sm={6} md={3} lg={3}>
                    <h1> search</h1>
                </Col>
                <Col xs={6} sm={6} md={3} lg={3}>
                    <h1> search</h1>
                </Col>
            </Row>
        );
    }
}

export default HeaderComponent;
