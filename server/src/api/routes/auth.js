const express = require('express');
const router = express.Router();
const { userRegister, userLogin } = require('../controllers/auth');

// @route POST api/auth/register
// @desc User Register
// @access Public
router.post('/register', userRegister);

// @route POST api/auth/login
// @desc User Login
// @access Public
router.post('/login', userLogin);

module.exports = router;
