import React from 'react';
import { Button, Grid, Header, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const seal = 'https://h-mar.org/wp-content/uploads/2018/12/Monk1-min.jpg';
const turtle = 'https://h-mar.org/wp-content/uploads/2018/12/SeaTurtle-min.jpg';
const bird = 'https://h-mar.org/wp-content/uploads/2019/06/Bird.jpg';
const whale = 'https://h-mar.org/wp-content/uploads/2018/12/Humpback1-min.jpg';

class InfoDistress extends React.Component {
  render() {
    return (
      <Grid textAlign='center' style={{ background: 'white' }} >
        <Grid.Row verticalAlign='middle' style={{ background: '#87acb5' }}>
          <Grid.Column width={14}>
            <div className="ui hidden divider"></div>
            <Header as="h3" style={{ color: '#AF4831FF' }}>Don&apos;t know what an animal in distress looks like?</Header>
            <p style={{ color: 'white' }}>Click on an animal below to see examples</p>
            <Button secondary inverted style={{ background: 'white' }}><Link to="/sealdistress"><Image src={seal} size="medium"/>Hawaiian Monk Seal</Link></Button>
            <div className="ui hidden divider"></div>
            <Button secondary inverted style={{ background: 'white' }}><Link to="/turtledistress"><Image src={turtle} size="medium"/>
                Turtle</Link></Button>
          </Grid.Column>
          <Grid.Row>
            <div className="ui hidden divider"></div>
            <Button secondary inverted style={{ background: 'white' }}><Link to="/birddistress"><Image src={bird} size="medium"/>
                Bird</Link></Button>
            <div className="ui hidden divider"></div>
            <Button secondary inverted style={{ background: 'white' }}><Link to="/other"><Image src={whale} size="medium"/>
                Other</Link></Button>
          </Grid.Row>
        </Grid.Row>
      </Grid>
    );
  }
}

export default InfoDistress;
