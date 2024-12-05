const express = require('express');
const router = express.Router();

// Example Enquiry Route
router.post('/', (req, res) => {
  const { name, email, message } = req.body;

  // Placeholder for saving the enquiry to the database
  console.log(`New enquiry received from ${name} (${email}): ${message}`);

  res.status(201).json({ message: 'Enquiry received successfully' });
});

module.exports = router;
