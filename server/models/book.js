/* 
This file is to create a book schema for MongoDB,
this is not the same sort of Schema we used for GraphQL which corresponds to the data stored on the graph.
This Schema defines the data that's being stored in MongoDB.
*/

//========================================
//               IMPORTS
//========================================
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//========================================
//               Schema
//========================================
const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String,
});

// A model refers to a collection in the DB
module.exports = mongoose.model('Book', bookSchema);
