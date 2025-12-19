---
sidebar_position: 1
---

# Backend Setup

This guide covers setting up the backend infrastructure for your RAG system.

## Database Configuration

The backend requires a vector database to store document embeddings. We'll use MongoDB Atlas with vector search capabilities.

## API Endpoints

The backend exposes several key endpoints:

- `/api/chat` - Process chat queries with RAG
- `/api/documents/index` - Index new documents
- `/api/documents/stats` - Get indexing statistics
- `/health` - Health check endpoint

## Configuration

Configure the backend with environment variables for:

- OpenAI API key
- MongoDB connection string
- Server port