import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Report table. See pages/ListReport.jsx. */
class ReportItem extends React.Component {
  render() {
    return (
      <Table.Row>
       <Table.Cell>{this.props.report.date}</Table.Cell>
        <Table.Cell>{this.props.report.name}</Table.Cell>
        <Table.Cell>{this.props.report.phone}</Table.Cell>
        <Table.Cell>{this.props.report.location}</Table.Cell>
        <Table.Cell>{this.props.report.description}</Table.Cell>
        <Table.Cell>{this.props.report.markers}</Table.Cell>
        <Table.Cell>{this.props.report.behavior}</Table.Cell>
        <Table.Cell>{this.props.report.numPeople}</Table.Cell>
        <Table.Cell>
          <Link to={`/edit/${this.props.report._id}`}>Edit</Link>
        </Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
ReportItem.propTypes = {
  report: PropTypes.shape({
    date: PropTypes.string,
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
export default withRouter(ReportItem);
