# AI-Spec Book Backend

This is the backend service for the AI-Spec Driven Technical Book with Embedded RAG Chatbot. It provides APIs for:

- Chat functionality with RAG (Retrieval-Augmented Generation)
- Document indexing and management
- Vector search capabilities

## Features

- OpenAI integration for chat responses
- MongoDB for document storage and retrieval
- Context-aware responses based on book content
- Support for both full-book and selection-only query modes

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file based on `.env.example` and add your API keys:
```bash
cp .env.example .env
```

3. Start the development server:
```bash
npm run dev
```

## API Endpoints

- `POST /api/chat` - Generate responses using RAG
- `POST /api/documents/index` - Index book documents for RAG
- `GET /api/documents/stats` - Get document statistics
- `GET /health` - Health check

## Environment Variables

- `OPENAI_API_KEY` - Your OpenAI API key
- `MONGODB_URI` - MongoDB connection string
- `PORT` - Server port (default: 3001)