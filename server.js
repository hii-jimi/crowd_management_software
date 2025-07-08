// server.js
require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mern_db'; // Default DB URI

// Middleware
app.use(cors());
app.use(express.json()); // Body parser for JSON data

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes); // Use the user routes

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB connected successfully!'))
    .catch(err => console.error('MongoDB connection error:', err));

// Basic Route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
