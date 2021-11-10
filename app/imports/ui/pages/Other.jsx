import React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';
import 'react-datepicker/dist/react-datepicker.css';

const hwc = '/images/HWC-Logo.jpg';
const dlnr = '/images/DLNR.png';
class Other extends React.Component {
  render() {
    return (
      <Grid textAlign='center' container>
        <Grid.Row verticalAlign='middle'>
          <Grid.Column width={14}>
            <Header as="h3">Unfortunately HMAR only responds to seals, turtles and birds.</Header>
            <Header as="h3">Below are numbers of other organzations that respond to other wildlife </Header>
            <Image src={hwc} size="tiny" centered alt='Hawaii Wildlife Center logo'/>
            <Header as="h3">Hawaii Wildlife Center:<br/>Bird and Bat Help Line<br/>(808) 884-5000</Header>
            <Image src={dlnr} size="tiny" centered alt='State of Hawaii Department of Land and Natural Resources logo'/>
            <Header as="h3"> State of Hawaii:<br/>Department of Land and Natural Resources<br/>Marine Animal Response Hotline<br/>1-888-256-9840</Header>
            <Header as="h3"> Honolulu Police Department&apos;s<br/>Non-emergency line: (808) 529-3111</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Other;
