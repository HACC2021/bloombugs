import React from 'react';
import { Grid, Image, Radio, Header } from 'semantic-ui-react';

const bleach = 'https://kauaiseals.files.wordpress.com/2017/05/v76thomton.jpg?w=584';
const tags = 'http://www.smru.st-andrews.ac.uk/files/2021/05/flipper_tag_eg.png';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class SealTop extends React.Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>
        <Grid.Column width={14}>
          <Image src={bleach}/>
          <Image src={tags}/>
        </Grid.Column>
        <Grid.Row>
          <div className="ui labeled input">
            <div className="ui label">
              Identifying Marks
            </div>
            <input type="text" />
          </div>
        </Grid.Row>
        <Grid.Row>
          <div className="ui labeled input">
            <div className="ui label">
              Animal Behavior
            </div>
            <input type="text" />
          </div>
        </Grid.Row>
        <Grid.Row>
          <p>Ex. Sleeping, Biting, Eating</p>
        </Grid.Row>
        <Grid.Row>
          <Header as="h3">Number of People Near Animal</Header>
        </Grid.Row>
        <Grid.Row>
          <Radio label='0 - 25' value='<25' checked={this.state.value === '<25'}
            onChange={this.handleChange}/>
        </Grid.Row>
        <Grid.Row>
          <Radio label='26 - 50' value='<50' checked={this.state.value === '<50'}
            onChange={this.handleChange}/>
        </Grid.Row>
        <Grid.Row>
          <Radio label='50 - 100' value='<100' checked={this.state.value === '<100'}
            onChange={this.handleChange}/>
        </Grid.Row>
        <Grid.Row>
          <Radio label='100+' value='>100' checked={this.state.value === '>100'}
            onChange={this.handleChange}/>
        </Grid.Row>
      </Grid>
    );
  }
}

export default SealTop;
