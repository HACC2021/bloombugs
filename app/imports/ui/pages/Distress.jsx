import React from 'react';
import { Grid, Header, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Distress extends React.Component {
  render() {
    return (
      <Grid id='distress' textAlign='center' container>
        <Grid.Row verticalAlign='middle'>
          <Grid.Column width={14}>
            <Header as="h2">If the animal is in distress, it is preferable to call HMAR
            so they can attend to the animal as soon as possible (888) 256-9840. However, if you cannot call, please fill out the form</Header>
            <Button animated size='massive' color='green'>
              <Button.Content visible>Click for Phone Call</Button.Content>
              <a href="tel:[888-256-9840]">
                <Button.Content hidden>
                  <Icon name="call" size='large'/>
                </Button.Content>
              </a>
            </Button>
            <hr/>
            <Button inverted size='big' color='blue' icon labelPosition='right'>
              <Icon name='file text'/>
              <Link to="/sighting">
              Click for Online Form
              </Link>
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Distress;
