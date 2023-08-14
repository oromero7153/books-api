const express = require('express')
require('dotenv').config();
const cors = require('cors')
const methodOverride = require('methodOverride')
const mongoose = require ('mongoose')

const app = express()
app.use(cors());

mongoose.connect(process.env.MONGO_URI,{
    useNewURLParser: true, 
    useUnifiedTopology: true,
});

//route
app.get('/', (req, res) => {
    res.send("Hello World")
});

const booksController = require('./controllers/books-controllers');
app.use('/books', booksController);

app.get('*',(req, res)=> {
    res.send('error 404, route does not exist')
});

app.listen(PORT, () => {
    console.log('Greetings! From port: ', PORT);
  });