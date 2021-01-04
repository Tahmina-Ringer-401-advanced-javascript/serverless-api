'use strict';

const uuid = require('uuid').v4;
const peopleModel = require('./people.schema');

exports.handler = async (event) => {
  const { name, height, nice } = JSON.parse(event.body);
  const id = uuid();

  try {
    const record = new peopleModel({ id, name, height, nice });
    const data = await record.save();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (e) {
    console.log('_________________Console logging+++++++++++++++++', e)
    return {
      statusCode: 500,
      response: e.message
    }
  }
};

