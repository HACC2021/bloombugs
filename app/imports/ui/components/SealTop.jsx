import React from 'react';
import { Grid } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class SealTop extends React.Component {
  render() {
    return (
      <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>
        <Grid.Column width={14}>
          <h1>Seal Sighting</h1>
          <h2>Location</h2>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SealTop;
