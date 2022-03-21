const express = require('express');
const router = express.Router();

// Import controllers
const { createSkill, getSkills, updateSkill } = require('../controllers/skill');

// Import middlewares
const verifyToken = require('../middlewares/verifyToken');

// @route POST api/skills
// @desc Create skill
// @access Private
router.post('/', verifyToken, createSkill);

// @route GET api/skills
// @desc Get all skills the user has
// @access Private
router.get('/', verifyToken, getSkills);

// @route PUT api/skills
// @desc Update single skill with required id
// @access Private
router.put('/:id', verifyToken, updateSkill);

module.exports = router;
