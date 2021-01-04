'use strict';

const peopleModel = require('./people.schema');

exports.handler = async (event) => {
  const id = event.pathParameters.id;
  const { name, height, nice } = JSON.parse(event.body);

  if (!id) {
    return {
      statusCode: 500,
      response: 'An id is required'
    };
  }
  try {
    let updatedObject = {
      name,
      height,
      nice
    };
    const data = await peopleModel.update({ 'id': id }, updatedObject);

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };

  } catch (error) {
    return {
      statusCode: 500,
      response: e.message
    };
  }
};
