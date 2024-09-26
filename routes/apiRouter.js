// routes/apiRouter.js
const express = require('express');
const router = express.Router();

// Import your controllers here if needed
const usersCtrl = require('./usersCtrl');

// Define your routes
router.post('/register', usersCtrl.register);
// Add other routes as needed

module.exports = router; 

