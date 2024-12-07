const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const enquiryRoutes = require('./routes/enquiryRoutes');
require('dotenv').config();

const app = express();

// Connect to Database
connectDB()
  .then(() => console.log('Database connected successfully'))
  .catch((error) => {
    console.error('Database connection failed:', error.message);
    process.exit(1); // Exit process with failure
  });

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Health Check Endpoint
app.get('/', (req, res) => {
  res.status(200).send('Backend is Running');
});

// Enquiry API Routes
app.use('/api/enquiries', enquiryRoutes);

// 404 Handler for Unknown Routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error Handler Middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
