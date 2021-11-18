import React from 'react';
import { Grid, Segment, Header, Image, Button, Container } from 'semantic-ui-react';
import { AutoForm, ErrorsField, NumField, SelectField, SubmitField, TextField, LongTextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { ReactSVG } from 'react-svg';
import { withTracker } from 'meteor/react-meteor-data';
import { Tracker } from 'meteor/tracker';
import { SealReport } from '../../api/report/SealReport';
import { Locations } from '../../api/Locations';

const bleach = 'https://kauaiseals.files.wordpress.com/2017/05/v76thomton.jpg?w=584';
const tags = 'http://www.smru.st-andrews.ac.uk/files/2021/05/flipper_tag_eg.png';
const ccScar = '/images/CCscar.png';
const NB = '/images/NBventral.png';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  date: String,
  time: String,
  animalName: {
    type: String,
    allowedValues: ['Adult Hawaiian Monk Seal', 'Baby Hawaiian Monk Seal', 'Hawaiian Monk seal with pup(s)'],
    defaultValue: 'Adult Hawaiian Monk Seal',
  },
  name: String,
  phone: String,
  location: String,
  latitude: Number,
  longitude: Number,
  hindFlipperTagCombo: {
    type: String,
    allowedValues: ['Red Tag only', 'Night (Black) only', 'Gray + Violet', 'Red + Pink', 'Blue + Dark Blue', 'Green + Lime', 'Tan + White', 'Yellow + Amber + Turquoise', 'Unknown colors', 'No tags'],
    defaultValue: 'Red Tag only',
  },
  description: String,
  numPeople: {
    type: String,
    allowedValues: ['0 - 5', '5 - 10', ' 10+ '],
    defaultValue: '0 - 5',
  },
},
{ tracker: Tracker });
const bridge = new SimpleSchema2Bridge(formSchema);

class SealSighting extends React.Component {
  constructor(props) {
    super(props);
    this.myDate = React.createRef();
    this.myTime = React.createRef();
    this.myAnimalName = React.createRef();
    this.myName = React.createRef();
    this.myPhone = React.createRef();
    this.myDescription = React.createRef();
    this.myNumPeople = React.createRef();
    this.myHindFlipperTagCombo = React.createRef();
    this.state = { showing: false, latitude: '',
      longitude: '', location: '', date: '' };
    this.handleLocation = this.handleLocation.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.preserveValues = this.preserveValues.bind(this);
    SealReport.collection.attachSchema(formSchema);
  }

  preserveValues() {
    this.setState({ date: this.myDate.current.value });
    this.setState({ time: this.myTime.current.value });
    this.setState({ animalName: this.myAnimalName.current.value });
    this.setState({ name: this.myName.current.value });
    this.setState({ phone: this.myPhone.current.value });
    this.setState({ description: this.myDescription.current.value });
    this.setState({ numPeople: this.myNumPeople.current.value });
    this.setState({ hindFlipperTagCombo: this.myHindFlipperTagCombo.current.value });
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
  /** Renders the Page for adding a document. */

  // On submit, insert the data.
  submit(data, formRef) {
    const { date, time, animalName, name, phone, location, latitude, longitude, description, hindFlipperTagCombo, numPeople } = data;
    const owner = Meteor.user().username;
    SealReport.collection.insert({ date, time, animalName, name, phone, location, latitude, longitude, description, hindFlipperTagCombo, numPeople, owner },
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
      <Grid centered style={{background: "#87acb5"}}>
        <Container><Grid.Column>
          <div className="ui hidden divider"></div>
          <Header as="h2" textAlign="center" style={{color: "white"}}>Seal Sighting Form</Header>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} model={this.state}>
            <Segment>
              <TextField name='date' type='date' inputRef={this.myDate}/>
              <TextField name='time' type='time' inputRef={this.myTime}/>
              <SelectField name='animalName' inputRef={this.myAnimalName}/>
              <TextField name='name' inputRef={this.myName}/>
              <TextField name='phone' decimal={false} inputRef={this.myPhone}/>
              <TextField name='location'/>

              <Button onClick={this.handleShow} type='button'>{this.state.showing ? 'Location set' : 'Get Location'}</Button>
              {this.state.showing && <Segment>
                <ReactSVG src="/images/Oahu_NS_all.svg" onClick={this.handleLocation}/>
              </Segment>}
              <LongTextField name='description' inputRef={this.myDescription} placeholder='Please provide a description of the situation and location. Example: statues or restuarnts near by, more than one animal being sighted, etc'/>
              <Grid.Row>
                <Header as="h5" textAlign="center">Applied Bleach</Header>
                <Image src={bleach} size="medium" centered/>
              </Grid.Row>
              <div className="ui hidden divider"></div>
              <Grid.Row>
                <Header as="h5" textAlign="center">Tags</Header>
                <Image src={tags} size="medium" centered/>
              </Grid.Row>
              <div className="ui hidden divider"></div>
              <Grid.Column>
                <Header as="h5" textAlign="center">CC Scar</Header>
                <Image src={ccScar} size="medium" centered/>
              </Grid.Column>
              <div className="ui hidden divider"></div>
              <Grid.Column>
                <Header as="h5" textAlign="center">NB Ventral</Header>
                <Image src={NB} size="medium" centered/>
              </Grid.Column>
              <SelectField name='hindFlipperTagCombo' inputRef={this.myHindFlipperTagCombo}/>
              <SelectField name='numPeople' inputRef={this.myNumPeople}/>
              <Header as="h5">Please add photos of the animals or area to better help the volunteers.</Header>
              <input type="file" id="file" style={{ display: "hidden" }} onChange={this.onChange}/>
              <div className="ui hidden divider"></div>
              <SubmitField value='Submit'/>
              <ErrorsField/>
            </Segment>
          </AutoForm>
          <div className="ui hidden divider"></div>
        </Grid.Column></Container>
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
})(SealSighting);
