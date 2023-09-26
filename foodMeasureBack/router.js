const express = require('express');
const app = require('./app');
const router = express.Router();


router.get('/', (req, res) => {
  res.send('<h1>test</h1>')
});



module.exports = router