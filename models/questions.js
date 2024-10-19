const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  region: { type: String, required: true },
  order: { type: Number, required: true }  // Order in the cycle
});

module.exports = mongoose.model('questions', QuestionSchema);
