const express = require('express');
const router = express.Router();
const Cycle = require('../models/cycles');
const Region = require('../models/region');
const question=require('../models/questions')

 const getQuestions =async (req, res) => {
  const region = req.params.region;
  try {
    const currentCycle = await Cycle.findOne({ region })
    if (!currentCycle) {
      return res.status(404).json({ message: 'No cycle found for this region' });
    }
    let allQuestions=await question.find({_id:currentCycle.currentQuestion})
    res.json({ question: allQuestions });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = {getQuestions};
