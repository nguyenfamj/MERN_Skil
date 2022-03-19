const express = require('express');
const router = express.Router();

// Import User model
const User = require('../models/User');

router.get('/new', (req, res) => res.send('User Auth route'));

module.exports = router;
