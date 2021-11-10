import React from 'react';
import { Button, Container, Grid, Header, List, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Cm = '/images/greenSeaTurtle.jpg';

class TurtleDistress extends React.Component {
  render() {
    return (
      <Container>
        <Grid verticalAlign='middle' textAlign='center' container>
          <Grid.Column width={14}>
            <Image src={Cm} size="medium" centered alt='green sea turtle'/>
            <Header as="h3">Sea Turtles come ashore to bask in the sun and to nest. So, lying on the beach is normal behavior for turtles. If however you notice the following about a sea turtle, please contact us. </Header>
            <Header as="h1">How to Recognize a Sea Turtle in Distress</Header>
            <Header as="h3">Potential Problems</Header>
            <List bulleted>
              <List.Item>Open wound or bleeding</List.Item>
              <List.Item>Entanglement in a rope, net, or plastic</List.Item>
              <List.Item>Damaged shells (commonly caused by motorboats and their propellers)</List.Item>
              <List.Item>Attached to fishing lines and/or hooks</List.Item>
              <List.Item>Tumors (Fibropapillomatosis)</List.Item>
            </List>
          </Grid.Column>
        </Grid>
        <Grid verticalAlign='middle' textAlign='center' container>
          <Grid.Column width={14}>
            <Header as="h3" color="red">Please do not approach the turtle (maintain a distance of 10 feet or 3 meters). This is for your safety, the turtle&apos;s safety and is in accordance with federal and state laws.</Header>
            <Header as="h3">If a sea turtle appears to be any of the above or is deceased, <b>please contact HMAR</b> via the phone or our online form.</Header>
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
        </Grid>
      </Container>
    );
  }
}

export default TurtleDistress;
