const express = require('express');
const { generateResponse } = require('../controllers/chatController');

const router = express.Router();

// Route to handle chat requests
router.post('/chat', async (req, res) => {
  try {
    const { message, contextMode } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const response = await generateResponse(message, contextMode);
    res.json({ response });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
});

module.exports = router;