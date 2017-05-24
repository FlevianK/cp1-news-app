import React from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import { Grid } from 'react-bootstrap';

class AppComponent extends React.Component {
    render() {
        return (
            <div className="app">
                <Grid>
                    <Header header="Worlds News" />
                    <Content />
                </Grid>
            </div>
        );
    }
}

export default AppComponent;