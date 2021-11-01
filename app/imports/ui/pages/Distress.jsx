import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

class Distress extends React.Component {
  render() {
    return (
      <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>
        <Grid.Column width={14}>
          <Header as="h1">PLEASE CALL HMAR AT (888) 256-9840</Header>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Distress;
