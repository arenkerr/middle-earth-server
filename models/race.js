const mongoose = require('mongoose');

// Mongoose Model
const raceSchema = new mongoose.Schema({
  title: String,
  desc: String,
})

module.exports = mongoose.model('Race', raceSchema);