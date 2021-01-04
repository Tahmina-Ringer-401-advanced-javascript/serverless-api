'use strict';

const peopleModel = require('./people.schema');

exports.handler = async (event) => {
  const id = event.pathParameters.id;

  if(!id) {
    return {
      statusCode: 500,
      response: 'An id is required'
    };
  }
  try {
    const data = await peopleModel.delete({'id': id});
    console.log('______Item Deleted Successfully_____', data);

    return {
      statusCode: 200,
      body: 'This person was deleted'
    };
    
  } catch (error) {
    return{
      statusCode: 500,
      response: e.message
    };
  }
};