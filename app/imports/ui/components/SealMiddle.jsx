import React from 'react';
import { Grid } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class SealTop extends React.Component {
  render() {
    return (
      <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>
        <Grid.Column width={14}>
          <div className="ui labeled input">
            <div className="ui label">
                Beach/Location
            </div>
            <input type="text" />
          </div>
        </Grid.Column>
        <Grid.Row>
          <div className="ui labeled input">
            <div className="ui label">
                Location Description
              <p> Example: Statues, Buldings near by etc </p>
            </div>
            <input type="text" />
          </div>
        </Grid.Row>
      </Grid>
    );
  }
}

export default SealTop;
