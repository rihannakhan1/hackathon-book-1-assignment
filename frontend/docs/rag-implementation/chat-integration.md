---
sidebar_position: 3
---

# Chat Integration

This section covers integrating the RAG functionality into your chat interface.

## Query Processing

The chat system processes queries through several steps:

1. **Query Understanding**: Parse and interpret user queries
2. **Context Retrieval**: Find relevant documents from the knowledge base
3. **Response Generation**: Generate context-aware responses using LLMs
4. **Response Formatting**: Present results to the user

## Context Modes

The system supports two context modes:

- **Full Book Mode**: Retrieve from entire book content
- **Selection Mode**: Respond only to user-provided text

## Performance Optimization

Optimize chat performance by:

- Implementing caching strategies
- Optimizing vector search queries
- Managing conversation history