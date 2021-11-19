// imports/ui/Task.jsx
import React from 'react';
import PropTypes from 'prop-types';

export const Task = ({ task }) => <li>{task.text}</li>;

Task.propTypes = {
  task: PropTypes.object,
};
