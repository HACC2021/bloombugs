import React from 'react';
import { Grid, Segment, Header, Image } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Report } from '../../api/report/Report';

const satellite = 'https://conserveturtles.org/wp-content/uploads/2021/02/GreenReleasedSatelliteTrans-400x267.png';
const tags = 'https://www.nationalband.com/wp-content/uploads/2017/05/sea-turtle-tag-1.png';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  date: String,
  name: {
    type: String,
    allowedValues: ['Green turtle (Chelonia mydas) Cm', 'Hawksbill turtle (Eretmochelys imbricata) Ei'],
    defaultValue: 'Green turtle (Chelonia mydas) Cm',
  },
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
class TurtleSighting extends React.Component {

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
          <Header as="h2" textAlign="center">Turtle Sighting Form</Header>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
            <Segment>
              <Header textAlign='center'> Contact Info</Header>
              <TextField name='date' type='date'/>
              <SelectField name='name'/>
              <TextField name='phone' decimal={false}/>
              <Header textAlign='center'> Sighting Info</Header>
              <TextField name='location'/>
              <TextField name='description' placeholder='ex. beach name, building near by, statues near by'/>
              <Grid.Row>
                <Image src={satellite} size="middle" centered/>
                <Header textAlign='center'>Satellite</Header>
              </Grid.Row>
              <Grid.Row>
                <Image src={tags} size="middle" centered/>
                <Header textAlign='center'>Tag</Header>
              </Grid.Row>
              <TextField name='markers' placeholder='ex. tags, satellite'/>
              <TextField name='behavior' placeholder='ex. sleeping, eating'/>
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

export default TurtleSighting;
