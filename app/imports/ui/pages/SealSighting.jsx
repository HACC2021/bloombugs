import React from 'react';
import { Grid, Segment, Header, Image } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Report } from '../../api/report/Report';

const bleach = 'https://kauaiseals.files.wordpress.com/2017/05/v76thomton.jpg?w=584';
const tags = 'http://www.smru.st-andrews.ac.uk/files/2021/05/flipper_tag_eg.png';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  date: String,
  name: String,
  phone: String,
  location: String,
  description: String,
  markers: String,
  behavior: String,
  numPeople: {
    type: String,
    allowedValues: ['0 - 25', '26 - 50', '51 - 100', '100 +'],
    defaultValue: '0 - 25',
  },
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class SealSighting extends React.Component {

  // On submit, insert the data.
  submit(data, formRef) {
    const { date, name, phone, location, description, markers, behavior, numPeople } = data;
    const owner = Meteor.user().username;
    Report.collection.insert({ date, name, phone, owner, location, description, markers, behavior, numPeople },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Record added successfully', 'success');
          formRef.reset();
        }
      });
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  render() {
    let fRef = null;
    return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Seal Sighting Form</Header>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
            <Segment>
              <TextField name='date' type='date'/>
              <TextField name='name'/>
              <TextField name='phone' decimal={false}/>
              <TextField name='location'/>
              <TextField name='description'/>
              <Grid.Row>
                <Image src={bleach} size="medium" centered/>
              </Grid.Row>
              <Grid.Row>
                <Image src={tags} size="medium" centered/>
              </Grid.Row>
              <TextField name='markers'/>
              <TextField name='behavior'/>
              <SelectField name='numPeople'/>
              <SubmitField value='Submit'/>
              <ErrorsField/>
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SealSighting;
