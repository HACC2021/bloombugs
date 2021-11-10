import React from 'react';
import { Grid, Segment, Image } from 'semantic-ui-react';
import { AutoForm, SubmitField, TextField } from 'uniforms-semantic';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
import swal from 'sweetalert';
import { TasksCollection } from '../../api/TasksCollection';

const t1pic = '/images/ShortTail.jpg';

const taskSchema = new SimpleSchema({
  text: String }, { tracker: Tracker });
const bridge = new SimpleSchema2Bridge(taskSchema);

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textval: '' };
    this.clickt1 = this.clickt1.bind(this);
    this.schema = new SimpleSchema({
      text: String,
    }, { tracker: Tracker });
    TasksCollection.attachSchema(this.schema);
  }

  clickt1(e) {
    console.log(e.target);
    this.setState({ textval: e.target.alt });
  }

  submit(data, formRef) {
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
      <Grid container centered>
        <AutoForm
          ref={ref => { fRef = ref; }}
          schema={bridge}
          onSubmit={data => this.submit(data, fRef)}
          onChangeModel={model => console.log(model)}
        >
          <Grid.Row>
            <Segment>
              <Image
                src={t1pic}
                size='small'
                alt='task1'
                onClick={this.clickt1}
              />
            </Segment>
          </Grid.Row>
          <Segment>
            <TextField
              name='text'
              value={this.state.textval}
            />
            <SubmitField value='Submit'/>
          </Segment>
        </AutoForm>
      </Grid>
    );
  }
}
export default TaskForm;
