const express = require('express');
const router = express.Router();
const {
  createClient,
  getClients,
  updateClient,
  deleteClient,
} = require('../controllers/clientController');

const auth = require('../middleware/authMiddleware');
const {
  clientValidationRules,
  clientUpdateValidationRules,
} = require('../validators/clientValidator');

router.use(auth);

// POST - Create a client with validation
router.post('/', clientValidationRules, createClient);

// GET - Fetch all clients (no validation needed)
router.get('/', getClients);

// PUT - Update client with ID and validation
router.put('/:id', clientUpdateValidationRules, updateClient);

// DELETE - Remove client by ID (auth is enough)
router.delete('/:id', deleteClient);

module.exports = router;
