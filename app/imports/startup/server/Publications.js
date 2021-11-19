import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Report } from '../../api/report/Report';
import { Locations } from '../../api/Locations';
import { BirdReport } from '../../api/report/BirdReport';
import { SealReport } from '../../api/report/SealReport';
import { TurtleReport } from '../../api/report/TurtleReport';
// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise publish nothing.
Meteor.publish(Report.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Report.collection.find({ owner: username });
  }
  return this.ready();
});

// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise publish nothing.
Meteor.publish(Report.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Report.collection.find();
  }
  return this.ready();
});

Meteor.publish(Locations.userPublicationName, function () {

    return Locations.collection.find();

});

Meteor.publish(BirdReport.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return BirdReport.collection.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish(BirdReport.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return BirdReport.collection.find();
  }
  return this.ready();
});
Meteor.publish(SealReport.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return SealReport.collection.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish(SealReport.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return SealReport.collection.find();
  }
  return this.ready();
});
Meteor.publish(TurtleReport.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return TurtleReport.collection.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish(TurtleReport.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return TurtleReport.collection.find();
  }
  return this.ready();
});
// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
