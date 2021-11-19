import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 * The ReportsCollection. This was deprecated but we are saving it for now as a template for future reference. As the EditReport.jsx is tied to this and we wish to implement editing capabilities in the future.
 */
class ReportsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'ReportsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      date: String,
      time: String,
      animalName: String,
      name: String,
      phone: String,
      location: String,
      latitude: Number,
      longitude: Number,
      description: String,
      numBirds: {
        type: String,
        allowedValues: ['1', '2', '3', '4+'],
        defaultValue: '1',
      },
      owner: String,
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the ReportsCollection.
 * @type {ReportsCollection}
 */
export const Report = new ReportsCollection();
