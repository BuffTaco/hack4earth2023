const express = require('express');
const app = require('./app');
const router = express.Router();
require('dotenv').config()


router.get('/key', (req, res) => {
  
  res.json(process.env.API_KEY)
});



module.exports = router