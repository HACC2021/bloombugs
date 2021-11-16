import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Report (Admin) table. See pages/ListReportAdmin.jsx. */
class BirdReportItemAdmin extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.report.date}</Table.Cell>
        <Table.Cell>{this.props.report.time}</Table.Cell>
        <Table.Cell>{this.props.report.animalName}</Table.Cell>
        <Table.Cell>{this.props.report.name}</Table.Cell>
        <Table.Cell>{this.props.report.phone}</Table.Cell>
        <Table.Cell>{this.props.report.location}</Table.Cell>
        <Table.Cell>{this.props.report.latitude}</Table.Cell>
        <Table.Cell>{this.props.report.longitude}</Table.Cell>
        <Table.Cell>{this.props.report.description}</Table.Cell>
        <Table.Cell>{this.props.report.numBirds}</Table.Cell>
        <Table.Cell>
          <Link to={`/edit/${this.props.report._id}`}>Edit</Link>
        </Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
BirdReportItemAdmin.propTypes = {
  report: PropTypes.shape({
    date: PropTypes.string,
    time: PropTypes.string,
    animalName: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
    location: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    description: PropTypes.string,
    numBirds: PropTypes.string,
    _id: PropTypes.string,
  }),
};

export default withRouter(BirdReportItemAdmin);
