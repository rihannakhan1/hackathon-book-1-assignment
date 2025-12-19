const openai = require('../config/openai');
const { getDbInstance } = require('../utils/db');

/**
 * Generate AI response using RAG
 */
const generateResponse = async (userMessage, contextMode = 'book') => {
  try {
    let context = '';

    if (contextMode === 'selection') {
      return 'In selection-only mode, I can only respond based on the text you provide.';
    }

    context = await retrieveContext(userMessage);

    const messages = [
      {
        role: 'system',
        content: `You are an AI assistant for a technical book.
Answer ONLY from the provided context.
If the answer is not in the context, say so clearly.`
      },
      {
        role: 'user',
        content: context
          ? `Context:\n${context}\n\nQuestion: ${userMessage}`
          : userMessage
      }
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
      max_tokens: 500,
      temperature: 0.7
    });

    return completion.choices[0].message.content.trim();

  } catch (error) {
    console.error('❌ OpenAI error:', error.message);
    return 'Error communicating with OpenAI. Please try again.';
  }
};

/**
 * Retrieve context from MongoDB
 */
const retrieveContext = async (query) => {
  const db = getDbInstance();
  if (!db) throw new Error('Database not initialized');

  const collection = db.collection('book_chunks');

  const count = await collection.estimatedDocumentCount();
  if (count === 0) {
    return 'No book content indexed yet.';
  }

  await collection.createIndex({ content: 'text' });

  const results = await collection
    .find({ $text: { $search: query } })
    .limit(5)
    .toArray();

  return results.map(r => r.content).join('\n\n');
};

module.exports = { generateResponse };
