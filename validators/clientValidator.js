const { body } = require('express-validator');

// Validation for creating a client
exports.clientValidationRules = [
  body('name').notEmpty().withMessage('Client name is required'),
  body('email').optional().isEmail().withMessage('Invalid email address'),
  body('phone').optional().isMobilePhone().withMessage('Invalid phone number'),
];

// Validation for updating a client
exports.clientUpdateValidationRules = [
  body('name').optional().notEmpty().withMessage('Name cannot be empty if provided'),
  body('email').optional().isEmail().withMessage('Invalid email address'),
  body('phone').optional().isMobilePhone().withMessage('Invalid phone number'),
];
