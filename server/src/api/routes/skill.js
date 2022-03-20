const express = require('express');
const router = express.Router();

// Import controllers
const { createSkill } = require('../controllers/skill');

// Import middlewares
const verifyToken = require('../middlewares/verifyToken');

// @route POST api/skills
// @desc Create skill
// @access Private
router.post('/', verifyToken, createSkill);

module.exports = router;
