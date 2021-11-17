import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { TurtleTable } from './TurtleTable';
import { TurtleReport } from '../../api/report/TurtleReport';

/** Renders a table containing all of the Report documents. Use <ReportItem> to render each row. */
class TurtleListReportAdmin extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
      <Container>
        <Header as="h2" textAlign="center">Sea Turtle Reports</Header>
        <TurtleTable reports={this.props.reports}/>
      </Container>
    );
  }
}

// Require an array of Report documents in the props.
TurtleListReportAdmin.propTypes = {
  reports: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Report documents.
  const subscription = Meteor.subscribe(TurtleReport.userPublicationName);
  const subscription2 = Meteor.subscribe(TurtleReport.adminPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready() && subscription2.ready();
  // Get the Report documents
  const reports = TurtleReport.collection.find({}).fetch();
  return {
    reports,
    ready,
  };
})(TurtleListReportAdmin);
