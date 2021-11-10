import React from 'react';
import { Button, Container, Grid, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class InfoDistress extends React.Component {
  render() {
    return (
      <Container>
        <Grid verticalAlign='middle' textAlign='center' container>
          <Grid.Column width={14}>
            <Header as="h1">Don&apos;t know what an animal in distress looks like?</Header>
            <p>Click on an animal below to see examples</p>
          </Grid.Column>
        </Grid>
        <Grid verticalAlign='middle' textAlign='center' container>
          <Grid.Column width={14}>
            <Button> <Link to="/sealdistress">Seal</Link></Button>
            <Button ><Link to="/turtledistress">Turtle</Link></Button>
          </Grid.Column>
          <Grid.Row>
            <Button><Link to="/birddistress">Bird</Link></Button>
            <Button ><Link to="/other">Other</Link></Button>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default InfoDistress;
