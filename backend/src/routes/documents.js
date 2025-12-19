const express = require('express');
const { processDocuments, getDocumentStats } = require('../services/documentService');

const router = express.Router();

// Route to process and index documents
router.post('/documents/index', async (req, res) => {
  try {
    const { documents } = req.body;

    if (!documents || !Array.isArray(documents)) {
      return res.status(400).json({ error: 'Documents array is required' });
    }

    const result = await processDocuments(documents);
    res.json(result);
  } catch (error) {
    console.error('Document processing error:', error);
    res.status(500).json({ error: 'Failed to process documents' });
  }
});

// Route to get document statistics
router.get('/documents/stats', async (req, res) => {
  try {
    const stats = await getDocumentStats();
    res.json(stats);
  } catch (error) {
    console.error('Document stats error:', error);
    res.status(500).json({ error: 'Failed to get document statistics' });
  }
});

module.exports = router;