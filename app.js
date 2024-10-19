const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./route/route');

app.use(cors()); // Allow all CORS
app.use(express.json()); // Parse JSON bodies

// Correct connection string with specified database name
const MONGODB_URI = 'mongodb+srv://Amal:amal1234tyui@cluster0.xibharg.mongodb.net/Stroll'
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);  // Exit process if connection fails
  }
};

connectDB();

app.use('/api', routes);

app.listen(3000, (error) => {
  if (error) {
    console.error('Error starting the server:', error);
  } else {
    console.log('Server is running on port 3000');
  }
});
