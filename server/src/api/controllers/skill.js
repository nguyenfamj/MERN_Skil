// Import Skill model
const Skill = require('../models/Skill');

// Get all current Skills
const getSkills = async (req, res) => {
  try {
    const allSkills = await Skill.find({ user: req.userID });
    res.json({ success: true, allSkills });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

// Create Skill in database
const createSkill = async (req, res) => {
  const { title, description, url, status } = req.body;

  //   Validation for required field 'title'
  if (!title)
    return res.status(400).json({ success: false, message: 'Title is required for the skill' });

  try {
    const newSkill = new Skill({
      title,
      description,
      url: url.startsWith('https://') || url.startsWith('http://') ? url : `https://${url}`,
      status: status || 'Planned',
      user: req.userID,
    });

    await newSkill.save();

    res.json({ success: true, message: 'Good luck with your new skill', skillContent: newSkill });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

// Update a skill
const updateSkill = async (req, res) => {
  const { title, description, url, status } = req.body;

  //   Validation for required field 'title'
  if (!title)
    return res.status(400).json({ success: false, message: 'Title is required for the skill' });

  try {
    let updatedSkill = {
      title,
      description: description || '',
      url: (url.startsWith('https://') || url.startsWith('http://') ? url : `https://${url}`) || '',
      status: status || 'Planned',
    };

    const updateCondition = { _id: req.params.id, user: req.userID };

    updatedSkill = await Skill.findOneAndUpdate(updateCondition, updatedSkill, { new: true });

    // User not authorized to update skill or skill not found in database
    if (!updatedSkill)
      return res
        .status(401)
        .json({ success: false, message: 'Skill not found or user is not authorized to update' });

    res.json({ success: true, message: 'Good luck with your progress' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports = { createSkill, getSkills, updateSkill };
