import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 * The ReportsCollection. It encapsulates state and variable values for each report.
 */
class DistressReportsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'DistressReportsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      date: String,
      time: String,
      animal: {
        type: String,
        allowedValues: ['Seal', 'Turtle', 'Bird' ],
        defaultValue: 'Seal',
      },
      name: String,
      phone: String,
      location: String,
      latitude: Number,
      longitude: Number,
      description: String,
      owner: String,
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}


export const DistressReport = new DistressReportsCollection();
