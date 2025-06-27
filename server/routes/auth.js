const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Your Mongoose model
const bcrypt = require('bcrypt');

// Register route
router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: 'Email already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword, role });

  await user.save();

  res.status(201).json({ message: 'User registered successfully' });
});

module.exports = router;
