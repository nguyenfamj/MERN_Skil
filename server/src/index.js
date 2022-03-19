const express = require('express');
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://admin:1409@mern-sticki.9o6su.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();

const app = express();

app.get('/', (req, res) => res.send('Hello World'));

const PORT = 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
