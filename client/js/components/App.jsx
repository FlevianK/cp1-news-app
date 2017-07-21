import React from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import { Grid } from 'react-bootstrap';


class App extends React.Component {
  /**
 * Class to hold the AppComponent component.
 * @extends React.Component
 */

  render() {
    /**
  * Display the News application on virtual Dom
  * @return {jsx} render the AppComponent Content
  */
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

export default App;