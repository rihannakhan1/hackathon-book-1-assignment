const { getDbInstance } = require('../utils/db');

/**
 * Process and index book documents for RAG
 * @param {Array} documents - Array of document objects with content, title, section, etc.
 */
const processDocuments = async (documents) => {
  try {
    const db = getDbInstance();
    if (!db) {
      throw new Error('Database not initialized');
    }
    const collection = db.collection('book_chunks');

    // Clear existing chunks (in production, you'd want to be more careful about this)
    await collection.deleteMany({});

    // Create text index for keyword search
    await collection.createIndex({ content: 'text' });

    // Process each document
    for (const doc of documents) {
      // Split document into chunks
      const chunks = splitDocumentIntoChunks(doc.content);

      // Prepare chunks for storage with embeddings
      const chunksToInsert = chunks.map((chunk, index) => ({
        title: doc.title,
        section: doc.section,
        sourceUrl: doc.sourceUrl,
        content: chunk,
        chunkIndex: index,
        createdAt: new Date(),
      }));

      // Insert chunks into database
      if (chunksToInsert.length > 0) {
        await collection.insertMany(chunksToInsert);
      }
    }

    console.log(`Processed ${documents.length} documents into chunks`);
    return { success: true, message: `Processed ${documents.length} documents` };
  } catch (error) {
    console.error('Error processing documents:', error);
    throw error;
  }
};

/**
 * Split a document into smaller chunks for embedding
 * @param {string} content - The document content to split
 * @param {number} maxLength - Maximum length of each chunk (default: 1000 characters)
 * @returns {Array<string>} - Array of content chunks
 */
const splitDocumentIntoChunks = (content, maxLength = 1000) => {
  const chunks = [];
  let currentChunk = '';

  // Split content into paragraphs
  const paragraphs = content.split('\n\n');

  for (const paragraph of paragraphs) {
    // If adding this paragraph would exceed the max length
    if (currentChunk.length + paragraph.length > maxLength && currentChunk !== '') {
      // Save the current chunk and start a new one
      chunks.push(currentChunk.trim());
      currentChunk = paragraph;
    } else {
      // Add the paragraph to the current chunk
      if (currentChunk !== '') {
        currentChunk += '\n\n';
      }
      currentChunk += paragraph;
    }
  }

  // Add the last chunk if it has content
  if (currentChunk) {
    chunks.push(currentChunk.trim());
  }

  return chunks;
};

/**
 * Get document statistics
 * @returns {Promise<Object>} - Document statistics
 */
const getDocumentStats = async () => {
  try {
    const db = getDbInstance();
    if (!db) {
      throw new Error('Database not initialized');
    }
    const collection = db.collection('book_chunks');
    const count = await collection.countDocuments();

    const stats = await collection.aggregate([
      {
        $group: {
          _id: '$section',
          count: { $sum: 1 },
          avgLength: { $avg: { $strLenCP: '$content' } }
        }
      }
    ]).toArray();

    return {
      totalChunks: count,
      sections: stats.map(s => ({ name: s._id, count: s.count }))
    };
  } catch (error) {
    console.error('Error getting document stats:', error);
    throw error;
  }
};

module.exports = {
  processDocuments,
  splitDocumentIntoChunks,
  getDocumentStats
};