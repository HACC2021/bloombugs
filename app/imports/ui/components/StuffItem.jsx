import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class StuffItem extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.stuff.name}</Table.Cell>
        <Table.Cell>{this.props.stuff.phone}</Table.Cell>
        <Table.Cell>{this.props.stuff.location}</Table.Cell>
        <Table.Cell>{this.props.stuff.description}</Table.Cell>
        <Table.Cell>{this.props.stuff.markers}</Table.Cell>
        <Table.Cell>{this.props.stuff.behavior}</Table.Cell>
        <Table.Cell>{this.props.stuff.numPeople}</Table.Cell>
        <Table.Cell>
          <Link to={`/edit/${this.props.stuff._id}`}>Edit</Link>
        </Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
StuffItem.propTypes = {
  stuff: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
    markers: PropTypes.string,
    behavior: PropTypes.string,
    numPeople: PropTypes.string,
    _id: PropTypes.string,
  }),
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(StuffItem);
