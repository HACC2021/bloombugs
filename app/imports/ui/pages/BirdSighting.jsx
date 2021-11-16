import React from 'react';
import { Grid, Segment, Header, Image, Button } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SelectField, SubmitField, TextField, NumField, LongTextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { ReactSVG } from 'react-svg';
import { withTracker } from 'meteor/react-meteor-data';
import { Tracker } from 'meteor/tracker';
import { Report } from '../../api/report/Report';
import { Locations } from '../../api/Locations';

const bfal = '/images/BlackFootAlbatross.jpg';

// Create a schema to specify the structure of the data to appear in the form.

const formSchema = new SimpleSchema({
  date: String,
  time: String,
  animalName: {
    type: String,
    allowedValues: ['Blackfoot Albatross BFAL', 'Laysan Albatross LAAL', 'Short Tailed Albatross/Albatross unknown type STAL',
      'Brown Booby/Masked Booby BRBO', 'Red Footed Booby/Booby unknown type RFBO', 'Great Frigate GRFR', 'Blue Noddy BGNO',
      'Black Noddy BLNO', 'Brown Noddy/Noddy unknown type BRNO', 'Bonin Petrel BOPE', "Bluwer's Petrel BUPE",
      "Tristram's Storm Petrel/Petrel unknown type TRSP", 'Wedge tail Shearwater WTSH', 'Newell Shearwater NESH',
      'Christmas Shearwater/Shearwater unknown type CHSH', 'Gray-Black Tern GRAT', 'Sooty Tern SOTE',
      'White Tern/Tern unknown type WHTE', 'Red Tail Tropicbird RTTR', 'White Tail Tropicbird/Tropicbird unknown type WTTR'],
    defaultValue: 'Blackfoot Albatross BFAL',
  },
  name: String,
  phone: String,
  location: String,
  latitude: Number,
  longitude: Number,
  description: String,
  numBirds: {
    type: String,
    allowedValues: ['1', '2', '3', '4+'],
    defaultValue: '1',
  },
},
{ tracker: Tracker });

const bridge = new SimpleSchema2Bridge(formSchema);

/* class MyTextField extends TextField {
  constructor(props) {
    super(props);
    this.birdName = React.createRef();
  }
} */
/** Renders the Page for adding a document. */
class BirdSighting extends React.Component {
  constructor(props) {
    super(props);
    this.myDate = React.createRef();
    this.myTime = React.createRef();
    this.myAnimalName = React.createRef();
    this.myName = React.createRef();
    this.myPhone = React.createRef();
    this.myDescription = React.createRef();
    this.myNumBirds = React.createRef();
    this.state = { showing: false, latitude: '',
      longitude: '', location: '', date: '' };
    this.handleLocation = this.handleLocation.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.preserveValues = this.preserveValues.bind(this);
    Report.collection.attachSchema(formSchema);
  }

  preserveValues() {
    this.setState({ date: this.myDate.current.value });
    this.setState({ time: this.myTime.current.value });
    this.setState({ animalName: this.myAnimalName.current.value });
    this.setState({ name: this.myName.current.value });
    this.setState({ phone: this.myPhone.current.value });
    this.setState({ description: this.myDescription.current.value });
    this.setState({ numbirds: this.myNumBirds.current.value });
  }

  handleShow() {
    // eslint-disable-next-line no-unused-expressions
    this.state.showing ? this.setState({ showing: false }) : this.setState({ showing: true });
    this.preserveValues();
  }

  handleLocation(e) {
    const id = e.target.id;
    const tokens = id.split('-');
    const path1 = tokens[0];
    console.log(path1);
    const loc = Locations.collection.find({ path: path1 }).fetch()[0];
    console.log(loc);
    this.setState({ location: loc.location });
    this.setState({ latitude: loc.latitude });
    this.setState({ longitude: loc.longitude });
    this.preserveValues();
  }

  // On submit, insert the data.
  submit(data, formRef) {
    const { date, time, animalName, name, phone, location, latitude, longitude, description, numBirds } = data;
    const owner = Meteor.user().username;
    Report.collection.insert({ date, time, animalName, name, phone, location, latitude, longitude, description, numBirds, owner },
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
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} model={this.state} >
            <Segment>
              <Grid.Row>
                <Image src={bfal} size="small" centered alt='albatross'/>
              </Grid.Row>
            </Segment>
            <Segment>
              <TextField name='date' type='date' inputRef={this.myDate}/>
              <TextField name='time' type='time' inputRef={this.myTime}/>
              <SelectField name='animalName' inputRef={this.myAnimalName}/>
              <TextField name='name' inputRef={this.myName}/>
              <TextField name='phone' decimal={false} inputRef={this.myPhone}/>
              <TextField name='location'/>
              <NumField name='latitude'/>
              <NumField name='longitude'/>
              <Button onClick={this.handleShow}>{this.state.showing ? 'Done' : 'Get Location'}</Button>
              {this.state.showing && <Segment>
                <ReactSVG src="/images/Oahu_NS_all.svg" onClick={this.handleLocation} />
              </Segment>}
              <LongTextField name='description' inputRef={this.myDescription}/>
              <SelectField name='numBirds' inputRef={this.myNumBirds}/>
              <SubmitField value='Submit'/>
              <ErrorsField/>
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Location documents.
  const subscription = Meteor.subscribe(Locations.userPublicationName);
  const subscription2 = Meteor.subscribe(Locations.adminPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  const ready2 = subscription2.ready();
  // Get the Report documents
  const reports = Locations.collection.find({}).fetch();
  return {
    reports,
    ready,
    ready2,
  };
})(BirdSighting);
