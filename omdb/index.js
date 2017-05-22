'use strict';

const request = require('request');
const createResponse = require('../utils');

const getInfo = data => {
  console.log("Hello1");
  console.log(data.entities);
  let intent = data.entities.intent && data.entities.intent[0].value || 'movieInfo';
  let movie = data.entities.movie && data.entities.movie[0].value || null;
  let releaseYear = data.entities.releaseYear && data.entities.releaseYear[0].value || null;
  return new Promise((resolve, reject) => {
    if(movie) {
      // Fetch from OMDB
      //resolve(`Finding details about ${movie}`);
      request({
        uri: "http://www.omdbapi.com",
        qs: {
          t: movie,
          plot: 'short',
          y: releaseYear,
          r: 'json',
          apikey: "1b674c00",
          i: "tt3896198"
        },
        method: 'GET'
      }, (error, response, body) => {
        if(!error && response.statusCode === 200) {
          console.log("Success");
          resolve(createResponse(intent, JSON.parse(body)));
        } else {
          reject(error);
          console.log("Hello3");
        }
      });

    } else {
      reject("Entities not found!");
    }
  });
}

module.exports = getInfo;
