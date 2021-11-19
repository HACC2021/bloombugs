import React from 'react';
import { Grid, Segment, Image } from 'semantic-ui-react';
import { AutoForm, SubmitField, TextField, ErrorsField } from 'uniforms-semantic';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
import swal from 'sweetalert';
import { TasksCollection } from '../../api/TasksCollection';

const bfal = '/images/BlackFootAlbatross.jpg';
const laal = '/images/Laysan.jpg';
const stal = '/images/ShortTail-3.jpg';
const brbo = '/images/Brownbooby.jpg';
const rfbo = '/images/RedFootedBobby.jpg';
const wttr = '/images/WhiteTailed.jpg';
const rttr = '/images/RedTailed.jpg';

const taskSchema = new SimpleSchema({
  text: String }, { tracker: Tracker });
const bridge = new SimpleSchema2Bridge(taskSchema);

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { animalName: '', location: '', longitude: '', latitude: '' };
    this.clickt1 = this.clickt1.bind(this);
    this.schema = new SimpleSchema({
      text: String,
    }, { tracker: Tracker });
    TasksCollection.attachSchema(this.schema);
  }

  clickt1(e) {
    console.log(e.target);
    this.setState({ text: e.target.alt });
  }

  submit(data, formRef) {
    console.log('submit', data, formRef);
    const { text } = data;
    TasksCollection.insert({ text },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Record added successfully', 'success');
          formRef.reset();
        }
      });
  }

  render() {
    let fRef = null;
    return (
      <AutoForm
        ref={ref => { fRef = ref; }}
        schema={bridge}
        onSubmit={data => this.submit(data, fRef)}
        model={this.state}
        // onChangeModel={model => console.log(model)}
      >
        <Grid centered container>
          <Grid.Row>
            <Image
              src={laal}
              size='small'
              alt='Laysan Albatross'
              onClick={this.clickt1}
            />
            <Image
              src={bfal}
              size='small'
              alt='Black Footed Albatross'
              onClick={this.clickt1}
            />
            <Image
              src={stal}
              size='small'
              alt='Short Tailed Albatross'
              onClick={this.clickt1}
            />
          </Grid.Row>
          <Grid.Row>
            <Image
              src={brbo}
              size='small'
              alt='Brown Booby'
              onClick={this.clickt1}
            />
            <Image
              src={rfbo}
              size='small'
              alt='Red Footed Booby'
              onClick={this.clickt1}
            />
          </Grid.Row>
          <Grid.Row>
            <Image
              src={wttr}
              size='small'
              alt='White Tail Tropicbird'
              onClick={this.clickt1}
            />
            <Image
              src={rttr}
              size='small'
              alt='Red Tail Tropicbird'
              onClick={this.clickt1}
            />
          </Grid.Row>
          <Segment>
            <TextField
              name='text'
            />
            <ErrorsField/>
            <SubmitField value='Submit'/>
          </Segment>
        </Grid>
      </AutoForm>
    );
  }
}
export default TaskForm;
