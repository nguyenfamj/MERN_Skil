// Import Skill model
const Skill = require('../models/Skill');

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

module.exports = { createSkill };
