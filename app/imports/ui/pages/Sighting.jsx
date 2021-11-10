import React from 'react';
import { Button, Grid, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Sighting extends React.Component {
  render() {
    return (
      <Grid verticalAlign='middle' textAlign='center' container>
        <Grid.Column width={14}>
          <Header as="h3">Marine Animal Report</Header>
          <p>What type of animal are you reporting?</p>
          <Button className="ui big button"><Link to="/sealsighting">Seal</Link></Button>
          <Button className="ui big button"><Link to="/turtlesighting">Turtle</Link></Button>
        </Grid.Column>
        <Grid.Row>
          <Button className="ui big button"><Link to="/birdsighting">Bird</Link></Button>
          <Button className="ui big button"><Link to="/other">Other</Link></Button>
        </Grid.Row>
      </Grid>
    );
  }
}
