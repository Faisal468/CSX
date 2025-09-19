const Contact = require('../models/Contact');

// @desc    Submit a contact form
// @route   POST /api/contact
// @access  Public
exports.submitContactForm = async (req, res, next) => {
  try {
    const { fullName, email, company, serviceInterested, projectDetails } = req.body;

    // Create contact submission
    const contact = await Contact.create({
      fullName,
      email,
      company,
      serviceInterested,
      projectDetails
    });

    res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully!'
    });
  } catch (err) {
    console.error('Contact form submission error:', err);
    res.status(500).json({
        success: false,
      error: 'There was an error submitting your message. Please try again.'
      });
    }
};

// @desc    Get all contact submissions
// @route   GET /api/contact
// @access  Private (via API key)
exports.getContactSubmissions = async (req, res, next) => {
  try {
    // Check for API key in header
    const apiKey = req.header('x-api-key');
    
    // Verify API key matches the one in environment variables
    if (!apiKey || apiKey !== process.env.ADMIN_API_KEY) {
      return res.status(401).json({
        success: false,
        error: 'Unauthorized access'
      });
    }

    // Get all contact submissions, sorted by newest first
    const contacts = await Contact.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
      });
  } catch (err) {
    next(err);
  }
};

// @desc    Update contact submission status
// @route   PUT /api/contact/:id
// @access  Private (via API key)
exports.updateContactStatus = async (req, res, next) => {
  try {
    // Check for API key in header
    const apiKey = req.header('x-api-key');
    
    // Verify API key matches the one in environment variables
    if (!apiKey || apiKey !== process.env.ADMIN_API_KEY) {
      return res.status(401).json({
        success: false,
        error: 'Unauthorized access'
      });
    }

    const { status } = req.body;

    // Validate status
    if (!status || !['new', 'in-progress', 'completed'].includes(status)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid status (new, in-progress, completed)'
      });
    }

    // Find and update the contact
    const contact = await Contact.findByIdAndUpdate(
      req.params.id, 
      { status },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: 'Contact submission not found'
      });
    }

    res.status(200).json({
      success: true,
      data: contact
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete a contact submission
// @route   DELETE /api/contact/:id
// @access  Private (via API key)
exports.deleteContactSubmission = async (req, res, next) => {
  try {
    // Check for API key in header
    const apiKey = req.header('x-api-key');
    
    // Verify API key matches the one in environment variables
    if (!apiKey || apiKey !== process.env.ADMIN_API_KEY) {
      return res.status(401).json({
        success: false,
        error: 'Unauthorized access'
      });
    }

    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: 'Contact submission not found'
      });
    }

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    next(err);
  }
};