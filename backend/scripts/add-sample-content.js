const { MongoClient } = require('mongodb');
require('dotenv').config();

async function addSampleContent() {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();

    const db = client.db(); // Uses the database specified in your connection string
    const collection = db.collection('book_chunks');

    // Clear existing content (optional)
    await collection.deleteMany({});

    // Create text index for search
    await collection.createIndex({ content: 'text' });

    // Sample book content about AI and RAG systems
    const sampleDocuments = [
      {
        title: "Introduction to AI-Native Systems",
        section: "chapter1",
        sourceUrl: "/docs/intro",
        content: `AI-native systems are designed from the ground up with artificial intelligence capabilities as a core component. Unlike traditional systems that have AI added as an afterthought, AI-native systems consider the probabilistic nature of AI outputs, the need for continuous learning, and the integration of AI models as primary architectural decisions. These systems are characterized by their ability to handle uncertainty, adapt to new data, and provide intelligent responses based on learned patterns.`
      },
      {
        title: "Understanding RAG Systems",
        section: "chapter2",
        sourceUrl: "/docs/rag-basics",
        content: `Retrieval-Augmented Generation (RAG) is a technique that combines the retrieval of relevant information from a knowledge base with the generative capabilities of large language models. The RAG process involves three main steps: 1) Retrieval - finding relevant documents or passages based on the user's query, 2) Augmentation - providing the retrieved information to the language model along with the original query, and 3) Generation - creating a response based on both the query and the retrieved context. This approach allows for more accurate, fact-based responses compared to generation alone.`
      },
      {
        title: "Vector Databases and Embeddings",
        section: "chapter3",
        sourceUrl: "/docs/embeddings",
        content: `Vector databases store and retrieve data in the form of high-dimensional vectors, which represent the semantic meaning of text, images, or other data types. Embeddings are numerical representations that capture the semantic relationships between different pieces of content. In RAG systems, both the stored knowledge and user queries are converted to embeddings, allowing for semantic search that goes beyond simple keyword matching. Popular vector databases include Pinecone, Weaviate, and MongoDB with vector search capabilities.`
      },
      {
        title: "Implementation Best Practices",
        section: "chapter4",
        sourceUrl: "/docs/best-practices",
        content: `When implementing RAG systems, consider these best practices: 1) Chunk documents into appropriate sizes (typically 200-1000 tokens) to balance context and precision, 2) Use appropriate embedding models for your domain, 3) Implement caching for frequently accessed content, 4) Monitor token usage and costs, 5) Test with real user queries to optimize the retrieval process, and 6) Plan for content updates and versioning. Proper error handling and fallback strategies are also crucial for production systems.`
      },
      {
        title: "Security Considerations",
        section: "chapter5",
        sourceUrl: "/docs/security",
        content: `Security in AI systems requires special considerations beyond traditional applications. Key areas include: protecting API keys and model access, validating and sanitizing inputs to prevent prompt injection attacks, ensuring sensitive data doesn't leak through model responses, implementing proper access controls, and monitoring for anomalous usage patterns. Additionally, consider data privacy regulations and implement appropriate data retention policies for conversation logs and user data.`
      }
    ];

    // Split documents into smaller chunks
    const chunksToInsert = [];
    for (const doc of sampleDocuments) {
      // Split content into paragraphs and create chunks
      const paragraphs = doc.content.split('\n\n');
      for (let i = 0; i < paragraphs.length; i += 2) { // Group every 2 paragraphs
        const chunkContent = paragraphs.slice(i, i + 2).join('\n\n');
        chunksToInsert.push({
          title: doc.title,
          section: doc.section,
          sourceUrl: doc.sourceUrl,
          content: chunkContent,
          chunkIndex: i,
          createdAt: new Date(),
        });
      }
    }

    // Insert chunks into database
    if (chunksToInsert.length > 0) {
      await collection.insertMany(chunksToInsert);
      console.log(`Successfully added ${chunksToInsert.length} content chunks to the database`);
    }

    await client.close();
    console.log('Sample content added successfully!');
  } catch (error) {
    console.error('Error adding sample content:', error);
  }
}

addSampleContent();