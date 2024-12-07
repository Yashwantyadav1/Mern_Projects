// routes/enquiryRoutes.js
const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry'); // Assuming you have this model

// POST route to save enquiry
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  const newEnquiry = new Enquiry({ name, email, message });

  try {
    await newEnquiry.save();
    res.status(201).json({ message: 'Enquiry submitted successfully!' });
  } catch (err) {
    res.status(400).json({ message: 'Error submitting enquiry.', error: err.message });
  }
});

// GET route to retrieve all enquiries
router.get('/', async (req, res) => {
  try {
    const enquiries = await Enquiry.find();
    res.status(200).json(enquiries);
  } catch (err) {
    res.status(400).json({ message: 'Error retrieving enquiries.', error: err.message });
  }
});

module.exports = router;
