import React from 'react';
import { Button, Container, Grid, Header, List, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const wtsh = '/images/shearwater.jpg';

class BirdDistress extends React.Component {
  render() {
    return (
      <Container style={{ padding: '10px' }}>
        <Grid textAlign='center' container>
          <Grid.Row verticalAlign='middle'>
            <Grid.Column width={14}>
              <Image src={wtsh} size="medium" centered alt='wedge-tailed shearwater'/>
              <Header as="h3">Many seabird species nest on the ground. However, the following are common indicators of distress regardless of a seabird&apos;s nesting behavior</Header>
              <Header as="h1">How to Recognize a Seabird in Distress</Header>
              <Header as="h3">Potential Signs of Illness</Header>
              <List bulleted>
                <List.Item>Stumbling or wobbling when walking; Looks drunk; Abnormal gait</List.Item>
                <List.Item>Glazed-over eyes</List.Item>
                <List.Item>Drooped wings</List.Item>
                <List.Item>Respiratory distress; Bobbing head while breathing</List.Item>
                <List.Item>Shivering/Shaking</List.Item>
                <List.Item>Fluffed feathers with lethargic behavior</List.Item>
                <List.Item>Low body weight</List.Item>
                <List.Item>Poor feather condition</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid textAlign='center' container>
          <Grid.Row verticalAlign='middle'>
            <Grid.Column width={14}>
              <Header as="h3">Other Conditions of Distress</Header>
              <List bulleted>
                <List.Item>Collision injuries (commonly from man-made lights, utility poles)</List.Item>
                <List.Item>Broken wing(s)</List.Item>
                <List.Item>Feathers covered in oil</List.Item>
                <List.Item>Wounds or cuts on body</List.Item>
                <List.Item>Injuries to feet and/or legs</List.Item>
                <List.Item>Maimed by a cat, dog or other wild animal</List.Item>
                <List.Item>Caught in a net or other marine debris</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid textAlign='center' container>
          <Grid.Row verticalAlign='middle'>
            <Grid.Column width={14}>
              <Header as="h3">If a seabird appears to be any of the above or is deceased, please contact HMAR via the phone or our online form.</Header>
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

export default BirdDistress;
