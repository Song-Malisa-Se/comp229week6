/* SONG MALISA SE, student number: 301233051, 26 oct 2022 */

let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number

},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);