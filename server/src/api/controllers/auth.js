const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

// Import User model
const User = require('../models/User');

// User Authentication handling, check for login status
const userAuth = async (req, res) => {
  try {
    const user = await User.findById(req.userID).select('-password');
    if (!user) return res.status(400).json({ success: false, message: 'User not found' });
    res.json({ success: true, message: 'Successfully authenticated', user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// User Register handling
const userRegister = async (req, res) => {
  const { username, password, firstname, lastname } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Missing user name and/or password' });
  }

  try {
    const user = await User.findOne({ username });

    if (user) return res.status(400).json({ success: false, message: 'Username is already taken' });

    const HASHED_PW = await argon2.hash(password);
    const newUser = new User({ username, password: HASHED_PW, firstname, lastname });

    // Save to database
    await newUser.save();

    // Generate token
    const accessToken = jwt.sign({ userID: newUser._id }, process.env.SECRET_ACCESS_TOKEN);

    // Return json data and token
    res.json({ success: true, message: 'User registered successfully', accessToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// User Login Handling
const userLogin = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Missing user name and/or password' });
  }

  try {
    // Check username on database
    const user = await User.findOne({ username });

    if (!user)
      return res.status(400).json({ success: false, message: 'Incorrect username or password' });

    // Username found and check the password
    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid)
      return res.status(400).json({ success: false, message: 'Incorrect username or password' });

    // Check done
    // Generate token
    const accessToken = jwt.sign({ userID: user._id }, process.env.SECRET_ACCESS_TOKEN);

    // Return json data and token
    res.json({ success: true, message: 'User logged in', accessToken });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { userAuth, userRegister, userLogin };
