const express = require('express')
const books = express.Router()
const Book = require('../models/books')

module.exports = books


//index 
route.get('/', async(req, res)=>{
    try{
        const founBooks: await Book.find();
    }
    catch(e){

    }
}
)