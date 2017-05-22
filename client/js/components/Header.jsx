import React from 'react';
import Login from './Login.jsx';
import { Row, Col } from 'react-bootstrap';

class HeaderComponent extends React.Component {
    render() {
        return (
            <Row id="header">
                <Col xs={12} sm={12} md={6} lg={6}>
                    <h1>{this.props.header}</h1>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <Login />
                </Col>
            </Row>
        );
    }
}

export default HeaderComponent;
