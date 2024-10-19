const cron = require('node-cron');
const moment = require('moment-timezone');
const Cycle = require('../models/cycles');
const Question = require('../models/questions');
const Region = require('../models/region');

cron.schedule('0 19 * * 1', async () => {
  const regions = await Region.find();
  
  regions.forEach(async (region) => {
    const currentCycle = await Cycle.findOne({ region: region.name });
    
    if (currentCycle) {
      const nextQuestionOrder = currentCycle.currentQuestion.order + 1;
      const nextQuestion = await Question.findOne({ region: region.name, order: nextQuestionOrder });

      if (nextQuestion) {
        const newCycleStartDate = moment().tz(region.timezone).toDate();
        const newCycleEndDate = moment().tz(region.timezone).add(7, 'days').toDate(); 
        await Cycle.updateOne(
          { region: region.name },
          { currentQuestion: nextQuestion._id, startDate: newCycleStartDate, endDate: newCycleEndDate }
        );
      }
    }
  });
});
