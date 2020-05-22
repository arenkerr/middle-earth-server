const mongoose = require('mongoose');

// Mongoose Model
const personSchema = new mongoose.Schema({
  name: String,
  tree_id: String,
  bio: String,
  race: String
})

module.exports = mongoose.model('Person', personSchema);