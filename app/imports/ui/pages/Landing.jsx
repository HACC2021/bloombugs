import React from 'react';
import { Button, Grid, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <Container fluid>
        <Grid id='landing-page' className='center aligned'>
          <Grid.Row verticalAlign='middle'>
            <Grid.Column width={14}>
              <h3 className="intro">Welcome to Kahukai: the HMAR Reporting app</h3>
              <p>Select an option from below:</p>
              <Button as={NavLink} className="distressButton" exact to="/distress" color='red' size='big'>Animal in distress</Button>

              <Button as={NavLink} className="sightingButton" exact to="/sighting" color='blue' size='big'>Animal sighting</Button>
              <p className="clickHere">Don&apos;t know what an animal in distress looks like?</p>
              <Button as={NavLink} className="infoButton" exact to="/infodistress">Click here</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Landing;
