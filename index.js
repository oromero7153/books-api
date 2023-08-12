const express = require('express')
require('dotenv').config();
const cors = require('cors')
const methodOverride = require('methodOverride')
const mongoose = require ('mongoose')


const app = express()
app.use(cors());


//route
app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log('Greetings! From port: ', PORT);
  })