const express = require('express')
const books = express.Router()
const Book = require('../models/books')
const SeedData = require('../seeders/book-seeds')

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
router.get('/', async(req, res)=>{
    try{
        const foundBooks = await Book.find();
        res.send(foundBooks);
    } catch(e){
console.error(e);
    }
})

//create
router.post('/', async (req, res)=>{
    console.log(req.body);
    try{
        await Book.create(req.body);
        res.sendStatus(200);
    } catch(e){
        console.error(e);
        res.sendStatus(500);
    }
})
//update
router.put('/', async (req,res)=>{
    try{
        await Book.findAndUpdate(req.params.id, req.body,{ new: true})
        res.sendStatus(201);
    } catch(e){
        console.error(e);
        res.sendStatus(500);
    }
})
// delete
router.delete('/:id', async (req, res)=>{
    console.log(req.body);
    try{
        await Book.findByIdAndDelete(req.params.id, { new: true});
        res.sendStatus(200);
    } catch(e){
        console.erroe(e);
        res.sendStatus(500);
    }
})
module.exports = router;