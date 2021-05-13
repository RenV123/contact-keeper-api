const { request } = require('express');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

/**
 * @route   POST api/users
 * @desc    Register a user
 * @access  Public
 */
router.post(
  '/',
  [
    check('name', 'Please eneter a name').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() }); //Bad request
    }

    const { name, email, password } = request.body;

    try {
      //Check if a user with this email already exists
      let user = await User.findOne({ email });

      if (user) {
        return response.status(400).json({ message: 'User already exists' });
      }

      user = new User({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      //Generate our JWT
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
          expiresIn: 36000, //expires in 10h (for prod should be 1 hour)
        },
        (error, token) => {
          if (error) throw error;
          response.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      response.status(500).send('Server Error');
    }
  }
);

module.exports = router;
