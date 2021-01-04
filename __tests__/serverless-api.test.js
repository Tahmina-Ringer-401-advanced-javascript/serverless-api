'use strict';

let apiURL = 'https://hpbo47pk28.execute-api.us-east-2.amazonaws.com';
const superagent = require('superagent');
let peopleId; 

describe ('Routes', () => {
  it('correctly POST a new person', async () => {
    const response = await superagent.post(apiURL);
    peopleId = response.body.id;
    expect(response).toHaveProperty('status', 200);
    expect(typeof response.body).toEqual('object');
    });
})

