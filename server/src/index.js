const express = require('express');
const cors = require('cors');
const app = express();

// Import environment variable
require('dotenv').config();
const mongoURI = process.env.MONGODB_URI;
const PORT = process.env.PORT || process.env.DEV_PORT;

//  Import connectDB() method to setup connection with MongoDB
const connectDB = require('./config/DatabaseConfig');

// Import routes
const authRouter = require('./api/routes/auth');
const skillRouter = require('./api/routes/skill');

// ---------------------------------------------------------------

connectDB(mongoURI)
  .then(() => {
    // Setup express server and config port
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

    // Setup middlewares
    app.use(cors());
    app.use(express.json());

    //   Setup main application routing
    app.use('/api/auth', authRouter);
    app.use('/api/skills', skillRouter);
  })
  .catch((error) => {
    console.log(`Connection error. Please check the following error message: ${error.message}`);
  });
