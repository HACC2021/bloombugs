import React from 'react';
import { Button, Grid, Container, List } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <Container fluid>
        <div className='background'>
          <div className='transparent-background'>
            <Grid id='landing-page' className='center aligned'>
              <Grid.Row verticalAlign='middle'>
                <Grid.Column width={14}>
                  <h1>Welcome to Kahukai: the HMAR Reporting app. This app is used to report animals in distress and to report
              animal sightings so that Hawaii Marine Animal Response (HMAR) can respond to and assess animals. </h1>
                  <h4>To use this app, you can select from the following via the top menu: </h4>
                  <List>
                    <List.Item>Distress Report: Prompts you to report an animal in distress to report to HMAR</List.Item>
                    <List.Item>Sighting Report: Prompts you to report an animal that you have sighted</List.Item>
                    <List.Item>Info: Provides information on what an animal in distress looks like</List.Item>
                  </List>
                  <p>Clicking on the Kahukai Logo takes you back to this landing page.</p>
                  <Button as={NavLink} className="distressButton" exact to="/distress" color='red' size='big'>Animal in Distress</Button>
                  <div className="ui hidden divider"></div>
                  <Button as={NavLink} className="sightingButton" exact to="/sighting" color='blue' size='big'>Animal Sighting</Button>
                  <p className="clickHere"><br/><br/>Don&apos;t know what an animal in distress looks like?</p>
                  <Button as={NavLink} className="infoButton" exact to="/infodistress">Click Here</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
      </Container>
    );
  }
}

export default Landing;
