import React from 'react';
import { Button, Grid, Image, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <Container fluid verticalAlign='middle'>
        <Grid id='landing-page' verticalAlign='middle' className='center aligned'>
          <Grid.Column width={14}>
            <h3 className="intro">Welcome to Kahukai: the HMAR Reporting app</h3>
            <p>Select an option from below:</p>
            <Button as={NavLink} className="distressButton" exact to="/distress" color='red'>Animal in distress</Button>
            <Image src='https://www.mauibath.com/wp-content/uploads/2019/10/596998840197290025-300x300.png' size='small' centered className="logo"/>
            <Button as={NavLink} className="sightingButton" exact to="/sighting" color='blue'>Animal sighting</Button>
            <p className="clickHere">Don&apos;t know what an animal in distress looks like?</p>
            <Button as={NavLink} className="infoButton" exact to="/infodistress">Click here</Button>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default Landing;
