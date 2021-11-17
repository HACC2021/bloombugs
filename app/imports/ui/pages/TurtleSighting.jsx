import React from 'react';
import { Grid, Segment, Header, Image, Button } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SelectField, SubmitField, TextField, LongTextField, NumField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { ReactSVG } from 'react-svg';
import { withTracker } from 'meteor/react-meteor-data';
import { Tracker } from 'meteor/tracker';
import { TurtleReport } from '../../api/report/TurtleReport';
import { Locations } from '../../api/Locations';

const satellite = 'https://conserveturtles.org/wp-content/uploads/2021/02/GreenReleasedSatelliteTrans-400x267.png';
const tags = 'https://www.nationalband.com/wp-content/uploads/2017/05/sea-turtle-tag-1.png';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  date: String,
  time: String,
  animalName: {
    type: String,
    allowedValues: ['Green turtle (Chelonia mydas) Cm', 'Hawksbill turtle (Eretmochelys imbricata) Ei'],
    defaultValue: 'Green turtle (Chelonia mydas) Cm',
  },
  name: String,
  phone: String,
  location: String,
  latitude: Number,
  longitude: Number,
  description: String,
  numTurtles: {
    type: String,
    allowedValues: ['1', '2', '3', '4+'],
    defaultValue: '1',
  },
},
{ tracker: Tracker });

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class TurtleSighting extends React.Component {
  constructor(props) {
    super(props);
    this.myDate = React.createRef();
    this.myTime = React.createRef();
    this.myAnimalName = React.createRef();
    this.myName = React.createRef();
    this.myPhone = React.createRef();
    this.myDescription = React.createRef();
    this.myNumTurtles = React.createRef();
    this.state = { showing: false, latitude: '',
      longitude: '', location: '', date: '' };
    this.handleLocation = this.handleLocation.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.preserveValues = this.preserveValues.bind(this);
    TurtleReport.collection.attachSchema(formSchema);
  }

  preserveValues() {
    this.setState({ date: this.myDate.current.value });
    this.setState({ time: this.myTime.current.value });
    this.setState({ animalName: this.myAnimalName.current.value });
    this.setState({ name: this.myName.current.value });
    this.setState({ phone: this.myPhone.current.value });
    this.setState({ description: this.myDescription.current.value });
    this.setState({ numTurtles: this.myNumTurtles.current.value });
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
    const { date, time, animalName, name, phone, location, latitude, longitude, description, numTurtles } = data;
    const owner = Meteor.user().username;
    TurtleReport.collection.insert({ date, time, animalName, name, phone, location, latitude, longitude, description, numTurtles, owner },
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
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} model={this.state}>
            <Segment>
              <Header textAlign='center'> Contact Info</Header>
              <TextField name='date' type='date' inputRef={this.myDate}/>
              <TextField name='time' type='time' inputRef={this.myTime}/>
              <SelectField name='animalName' inputRef={this.myAnimalName}/>
              <TextField name='name' inputRef={this.myName}/>
              <TextField name='phone' decimal={false} inputRef={this.myPhone}/>
              <TextField name='location'/>
              <NumField name='latitude'/>
              <NumField name='longitude'/>
              <Button onClick={this.handleShow}>{this.state.showing ? 'Location set' : 'Get Location'}</Button>
              {this.state.showing && <Segment>
                <ReactSVG src="/images/Oahu_NS_all.svg" onClick={this.handleLocation} />
              </Segment>}
              <LongTextField name='description' inputRef={this.myDescription}/>
              <Grid.Row>
                <Image src={satellite} size="medium" centered/>
                <Header textAlign='center'>Satellite</Header>
              </Grid.Row>
              <Grid.Row>
                <Image src={tags} size="medium" centered/>
                <Header textAlign='center'>Tag</Header>
              </Grid.Row>
              <SelectField name='numTurtles' inputRef={this.myNumTurtles}/>
              <SubmitField value='Submit'/>
              <ErrorsField/>
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}
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
})(TurtleSighting);
