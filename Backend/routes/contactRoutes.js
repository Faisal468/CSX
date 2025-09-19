const express = require('express');
const {
  submitContactForm,
  getContactSubmissions,
  updateContactStatus,
  deleteContactSubmission
} = require('../controllers/contactController');

const router = express.Router();

// Public route for submitting contact form
router.post('/', submitContactForm);

// Protected routes (using API key)
router.get('/', getContactSubmissions);
router.put('/:id', updateContactStatus);
router.delete('/:id', deleteContactSubmission);

module.exports = router;