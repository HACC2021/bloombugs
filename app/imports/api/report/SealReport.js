import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 * The ReportsCollection. It encapsulates state and variable values for each report.
 */
class SealReportsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'SealReportsCollection';
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
      markers: {
        type: String,
        allowedValues: ['Applied Bleach', 'Tags', 'Ventral CC Scar', 'NB Ventral RHF', 'Scar', 'Unknown'],
        defaultValue: 'Unknown',
      },
      numPeople: {
        type: String,
        allowedValues: ['0 - 5', '5 - 10', ' 10+ '],
        defaultValue: '0 - 5',
      },
      image: String,
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
 * @type {SealReportsCollection}
 */
export const SealReport = new SealReportsCollection();
