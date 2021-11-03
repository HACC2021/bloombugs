import React from 'react';
import { Grid } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class ContactInfo extends React.Component {
  render() {
    return (
      <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>
        <Grid.Column width={14}>
          <h1> Contact Information </h1>
          <div className="ui labeled input">
            <div className="ui label">
                Name
            </div>
            <input type="text" />
          </div>
        </Grid.Column>
        <Grid.Row>
          <div className="ui labeled input">
            <div className="ui label">
                Phone Number
            </div>
            <input type="text" />
          </div>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ContactInfo;
