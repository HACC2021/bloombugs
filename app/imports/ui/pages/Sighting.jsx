import React from 'react';
import { Button, Grid, } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Sighting extends React.Component {
  render() {
    return (
      <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>
        <Grid.Column width={14}>
          <Button secondary inverted><Link to="/sealsighting">Seal</Link></Button>
          <Button secondary inverted><Link to="/turtlesighting">Turtle</Link></Button>
        </Grid.Column>
        <Grid.Row>
          <Button secondary inverted><Link to="/birdsighting">Bird</Link></Button>
          <Button secondary inverted><Link to="/other">Other</Link></Button>
        </Grid.Row>
      </Grid>
    );
  }
}

