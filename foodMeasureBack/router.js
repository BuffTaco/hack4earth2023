const express = require('express');
const app = require('./app');
const router = express.Router();
require('dotenv').config()
const https = require('https')
const axios = require('axios')


router.get('/:choice', async (req, res) => {
  
  const options = {
    hostname: 'api.nal.usda.gov',
    path: `/fdc/v1/foods/search?query=${req.params.choice}&dataType=Branded&pageSize=50&api_key=${process.env.API_KEY}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  let data = '';
  
  const request = https.request(options, (response) => {
    // Set the encoding, so we don't get log to the console a bunch of gibberish binary data
    response.setEncoding('utf8');

    // As data starts streaming in, add each chunk to "data"
    response.on('data', (chunk) => {
      data += chunk;


    });

    // The whole response has been received. Print out the result.
    response.on('end', () => {
      console.log(data)
      res.json(data);
    

      
    });
  });
  // Log errors if any occur
  request.on('error', (error) => {
    reject(error);
  });

  // End the request
  request.end();
  

});



module.exports = router