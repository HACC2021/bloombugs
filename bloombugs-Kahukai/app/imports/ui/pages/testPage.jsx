import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import * as tasks from 'underscore/underscore-esm';
import TaskForm from '../pages/TaskForm';
import { Task } from './Task';

class TestPage extends React.Component {

  render() {
    return (
      <Container id='testPage'>
        <Header as="h1">Test OnClick Image</Header>
        <TaskForm/>
        <ul>
          {tasks.map(task => <Task key={task._id} task={task}/>)}
        </ul>
      </Container>
    );
  }
}
export default TestPage;
