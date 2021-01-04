'use strict';

const peopleModel = require('./people.schema');

exports.handler = async (event) => {
  const id = event.pathParameters.id;
  console.log('__id__', id);

  try {

    let data;

    //check to see if there is an ID, if there is, query the DB to find record with the id and return it
    if(id) {
      const list = await peopleModel.query('id').eq(id).limit(1).exec();
      data = list;
    } else {
      // if not return all records
      data = await peopleModel.scan().exec();
    }
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      statusCode: 500,
      response: JSON.stringify(e)
    }
  }
};
