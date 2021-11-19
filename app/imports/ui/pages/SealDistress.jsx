import React from 'react';
import { Button, Container, Grid, Header, List, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const mnk = '/images/monkSeals.jpg';

class SealDistress extends React.Component {
  render() {
    return (
      <Container>
        <Grid textAlign='center' container>
          <Grid.Row verticalAlign='middle'>
            <Grid.Column width={14}>
              <Image src={mnk} size="medium" centered alt='Hawaiian monk seal and pup'/>
              <Header as="h3">Hawaiian Monk seals are semi-aquatic, don&apos;t need to stay wet and come ashore
              to bask in the sun. So, lying on the beach is normal behavior for our Monk Seals. If however you notice the following about a seal, please contact us. </Header>
              <Header as="h1">How to Recognize a Seal in Distress</Header>
              <Header as="h3">Potential Signs of Illness</Header>
              <List bulleted>
                <List.Item>Mucus or blood around mouth or nose</List.Item>
                <List.Item>Wheezing, sneezing or coughing while breathing</List.Item>
                <List.Item>Cloudy or crusty eyes; Lots of squinting or blinking</List.Item>
                <List.Item>Underweight; Ribs visible or skin looks baggy</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid textAlign='center' container>
          <Grid.Row verticalAlign='middle'>
            <Grid.Column width={14}>
              <Header as="h3">Other Conditions of Distress</Header>
              <List bulleted>
                <List.Item>Open wound or bleeding</List.Item>
                <List.Item>Entanglement in a rope, net, or plastic</List.Item>
                <List.Item>Attached to fishing lines and/or hooks</List.Item>
                <List.Item>Maimed by a cat, dog or other wild animal</List.Item>
                <List.Item>People and/or pets getting too close to seal</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid textAlign='center' container>
          <Grid.Row verticalAlign='middle'>
            <Grid.Column width={14}>
              <Header as="h3" color="red">Please do not approach seals (maintain a distance of 50 feet
              or 150 feet for mother seals and their pups). This is for your safety, the seals&apos;
              safety and is in accordance with federal and state
              laws.</Header>
              <Header as="h3">If a seal appears to be any of the above or is deceased, please contact HMAR via the phone or our online form.</Header>
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
      </Container>
    );
  }
}

export default SealDistress;
