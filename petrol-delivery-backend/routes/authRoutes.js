const express = require('express');
const { body, validationResult } = require('express-validator');
const authController = require('../controllers/authController');  // Ensure this path is correct

const router = express.Router();

// Register a new user with validation
router.post('/register', [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}, authController.registerUser);  // Ensure authController.registerUser is defined

// Login user with validation
router.post('/login', [
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').notEmpty().withMessage('Password is required')
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}, authController.loginUser);  // Ensure authController.loginUser is defined

module.exports = router;
