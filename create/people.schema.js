'use strict';

const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
  'id': String,
  'name': {
    'type': Array,
    'schema': [String]
  },
  'height': Number,
  'nice': { type:Boolean, default: true}
})

module.exports = dynamoose.model('people', peopleSchema);
