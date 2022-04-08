const express = require('express');
const router = express.Router();
const { userAuth, userRegister, userLogin } = require('../controllers/auth');
const verifyToken = require('../middlewares/verifyToken');

// @route GET api/auth
// @desc Check and authenticate if user is logged in
// @access Public
router.get('/', verifyToken, userAuth);

// @route POST api/auth/register
// @desc User Register
// @access Public
router.post('/register', userRegister);

// @route POST api/auth/login
// @desc User Login
// @access Public
router.post('/login', userLogin);

module.exports = router;
