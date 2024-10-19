const mongoose = require('mongoose');

const CycleSchema = new mongoose.Schema({
  region: { type: String, required: true },
  currentQuestion: { type: mongoose.Schema.Types.ObjectId, ref: 'questions' },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true }
});

module.exports = mongoose.model('cycles', CycleSchema);
