const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Please add your full name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please add your email'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  company: {
    type: String,
    trim: true
  },
  serviceInterested: {
    type: String,
    trim: true
  },
  projectDetails: {
    type: String,
    required: [true, 'Please add project details']
  },
  status: {
    type: String,
    enum: ['new', 'in-progress', 'completed'],
    default: 'new'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Contact', contactSchema);