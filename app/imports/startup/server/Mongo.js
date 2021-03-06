import { Meteor } from 'meteor/meteor';
import { Report } from '../../api/report/Report.js';
import { TasksCollection } from '../../api/TasksCollection';
import { Locations } from '../../api/Locations';
import { BirdReport } from '../../api/report/BirdReport';
import { SealReport } from '../../api/report/SealReport';
import { TurtleReport } from '../../api/report/TurtleReport';
import { DistressReport } from '../../api/report/DistressReport';

/* eslint-disable no-console */

// Initialize the database with a default data document.
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Report.collection.insert(data);
}

// Initialize the ReportsCollection if empty.
if (Report.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}
if (BirdReport.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}
if (SealReport.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}
if (DistressReport.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}
if (TurtleReport.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}
TasksCollection.find();
Locations.collection.find();
