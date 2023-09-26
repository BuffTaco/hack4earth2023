const express = require('express')
const app = express()
const router = require("./router.js")
const cors = require('cors')

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())

app.use('/food', router)

module.exports = app





