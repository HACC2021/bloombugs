import React from 'react';
import { Button, Container, Grid, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class InfoDistress extends React.Component {
  render() {
    return (
      <Container>
        <Grid textAlign='center' container>
          <Grid.Row verticalAlign='middle'>
            <Grid.Column width={14}>
              <Header as="h1">Don&apos;t know what an animal in distress looks like?</Header>
              <p>Click on an animal below to see examples</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid textAlign='center' container>
          <Grid.Row verticalAlign='middle'>
            <Grid.Column width={14}>
              <Button secondary inverted><Link to="/sealdistress">Seal</Link></Button>
              <Button secondary inverted><Link to="/turtledistress">Turtle</Link></Button>
            </Grid.Column>
            <Grid.Row>
              <Button secondary inverted><Link to="/birddistress">Bird</Link></Button>
              <Button secondary inverted><Link to="/other">Other</Link></Button>
            </Grid.Row>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default InfoDistress;
