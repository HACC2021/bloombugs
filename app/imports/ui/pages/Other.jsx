import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

class Other extends React.Component {
  render() {
    return (
      <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>
        <Grid.Column width={14}>
          <Header as="h1"> Unfortunately HMAR only Responds to seals, turtles and birds.</Header>
          <Header as="h1"> Below are numbers to other orginzations that respond to wildlife </Header>
          <Header as="h1"> Hawaii Wildlife Center: (808) 884-5000</Header>
          <Header as="h1"> State of Hawaii: The Division of Conservation and Resources Enforcement: (808) 692-8015</Header>
          <Header as="h1"> Hawaii PD: Non-emergancies: (808) 935-3311</Header>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Other;
