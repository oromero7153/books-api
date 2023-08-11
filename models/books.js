const mongoose = require('mongoose')
const { Schema } = mongoose 

const bookSchema = new Schema({
    name: { type: String, required: true },
    title: String,
    year: Number,
    quantity: Number,
    imageURL: string
})

// model and export: 
const Books = mongoose.model('Book', bookSchema)
module.exports = Books
