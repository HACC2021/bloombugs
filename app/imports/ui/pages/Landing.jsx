import React from 'react';
import { Button, Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>
        <Grid.Column width={14}>
          <h3>Welcome to the HMAR Reporting app</h3>
          <p>Select an option from below:</p>
          <Button><Link to="/distress">Animal in distress</Link></Button>
          <Image src='https://www.mauibath.com/wp-content/uploads/2019/10/596998840197290025-300x300.png' size='small' centered/>
          <Button secondary><Link to="/sighting">Animal sighting</Link></Button>
          <p>Don&apos;t know what an animal in distress looks like?</p>
          <Button>Click here</Button>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Landing;
