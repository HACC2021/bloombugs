import React from 'react';
import { Grid, Loader, Header, Segment } from 'semantic-ui-react';
import swal from 'sweetalert';
import { AutoForm, HiddenField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { BirdReport } from '../../api/report/BirdReport';

const bridge = new SimpleSchema2Bridge(BirdReport.schema);

/** Renders the Page for editing a single document. */
class EditBirdReport extends React.Component {

  // On successful submit, insert the data.
  submit(data) {
    const { date, name, phone, location, description, markers, behavior, numPeople, Submit, _id } = data;
    BirdReport.collection.update(_id, { $set: { date, name, phone, location, description, markers, behavior, numPeople, Submit } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  }

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  renderPage() {
    return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Edit Report</Header>
          <AutoForm schema={bridge} onSubmit={data => this.submit(data)} model={this.props.doc}>
            <Segment>
              <TextField name='date' type='date'/>
              <SelectField name='name'/>
              <TextField name='phone'/>
              <TextField name='location'/>
              <TextField name='description'/>
              <TextField name='markers'/>
              <TextField name='behavior'/>
              <SelectField name='numPeople'/>
              <SubmitField value='Submit'/>
              <HiddenField name='owner' />
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

// Require the presence of a Report in the props object. Uniforms adds 'model' to the props, which we use.
EditBirdReport.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Report documents.
  const subscription = Meteor.subscribe(BirdReport.userPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the document
  const doc = BirdReport.collection.findOne(documentId);
  return {
    doc,
    ready,
  };
})(EditBirdReport);
