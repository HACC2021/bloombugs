import React from 'react';
import { Grid, Segment, Header, Image } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Report } from '../../api/report/Report';

const bfal = '/images/BlackFootAlbatross.jpg';
// Create a schema to specify the structure of the data to appear in the form.

const formSchema = new SimpleSchema({
  date: String,
  name: {
    type: String,
    allowedValues: ['Blackfoot Albatross BFAL', 'Laysan Albatross LAAL', 'Short Tailed Albatross/Albatross unknown type STAL',
      'Brown Booby/Masked Booby BRBO', 'Red Footed Booby/Booby unknown type RFBO', 'Great Frigate GRFR', 'Blue Noddy BGNO',
      'Black Noddy BLNO', 'Brown Noddy/Noddy unknown type BRNO', 'Bonin Petrel BOPE', "Bluwer's Petrel BUPE",
      "Tristram's Storm Petrel/Petrel unknown type TRSP", 'Wedge tail Shearwater WTSH', 'Newell Shearwater NESH',
      'Christmas Shearwater/Shearwater unknown type CHSH', 'Gray-Black Tern GRAT', 'Sooty Tern SOTE',
      'White Tern/Tern unknown type WHTE', 'Red Tail Tropicbird RTTR', 'White Tail Tropicbird/Tropicbird unknown type WTTR'],
    defaultValue: 'Blackfoot Albatross BFAL',
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

/* class MyTextField extends TextField {
  constructor(props) {
    super(props);
    this.birdName = React.createRef();
  }
} */
/** Renders the Page for adding a document. */
class BirdSighting extends React.Component {

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
          <Header as="h2" textAlign="center">Bird Sighting Form</Header>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
            <Segment>
              <Grid.Row>
                <Header textAlign='center'>Albatross</Header>
                <Image src={bfal} size="small" centered alt='albatross'/>
              </Grid.Row>
            </Segment>
            <Segment>
              <TextField name='date' type='date'/>
              <SelectField name='name'/>
              <TextField name='phone' decimal={false}/>
              <TextField name='location'/>
              <TextField name='description'/>
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
export default BirdSighting;
