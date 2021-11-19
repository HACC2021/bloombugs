import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { BirdTable } from './BirdTable';
import { BirdReport } from '../../api/report/BirdReport';

/** Renders a table containing all of the Report documents. Use <ReportItem> to render each row. */
class BirdListReportAdmin extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
      <div className="ui fluid vertical menu">
        <Header as="h2" textAlign="center">Seabird Reports</Header>
        <BirdTable reports={this.props.reports} />
      </div>
    );
  }
}

// Require an array of Report documents in the props.
BirdListReportAdmin.propTypes = {
  reports: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Report documents.
  const subscription = Meteor.subscribe(BirdReport.userPublicationName);
  const subscription2 = Meteor.subscribe(BirdReport.adminPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready() && subscription2.ready();
  // Get the Report documents
  const reports = BirdReport.collection.find({}).fetch();
  return {
    reports,
    ready,
  };
})(BirdListReportAdmin);
