const mongoose = require('mongoose')
const { model, Schema } = mongoose 



const bookSchema = new Schema({
    name: { type: String, required: true },
    title: String,
    year: Number,
    quantity: Number,
    imageURL: string
})

const Book = model('Books', bookSchema)

// model and export: 
module.exports = Book;
