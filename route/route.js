const express = require('express');
const router = express.Router();
const {getQuestions}=require('../controller/controller')


router.get('/:region',getQuestions)


module.exports = router