import React from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';

class Distress extends React.Component {
  render() {
    return (
      <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>
        <Grid.Column width={14}>
          <Header as="h1">If the animal is in distress, it is preferable to call HMAR
            so they can attend to the animal as soon as possible (888) 256-9840. However, if you cannot call, please fill out the form</Header>
          <Button>Click for Phone Call</Button>
          <Button>Click for Online Form</Button>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Distress;
