const express = require('express')
const books = express.Router()
const Book = require('../models/books')

module.exports = books
//seeded data
router.get('/data/seed' , (req, res)=>{
    Book.insertMany(seedData)
   .then(createdBooks => {
    res.sendstatus(200);
   })
.catch(e =>{
    console.error(e);
});
})

//index 
route.get('/', async(req, res)=>{
    try{
        const foundBooks = await Book.find();
        res.send(foundBooks);
    } catch(e){
console.error(e);
    }
})