# Unified AI-Spec–Driven Technical Book with Embedded RAG Chatbot Constitution

## Core Principles

### I. Spec-First Development
All work must be driven by clear, versioned specifications using Spec-Kit Plus. No implementation without an approved spec.

### II. Technical Accuracy & Verifiability
All technical explanations, code samples, and architectural decisions must be accurate, testable, and aligned with official documentation and primary sources.

### III. Clarity for a Developer Audience
Content is written for software developers with intermediate knowledge of web development, APIs, and AI concepts.

### IV. Reproducibility & Transparency
Readers must be able to reproduce the book build (Docusaurus), deployment (GitHub Pages), backend services (Axios, Mongodb Atlas, Cors), and RAG chatbot behavior.

### V. AI-Native Design
The book and chatbot must demonstrate modern AI-native software patterns, including RAG, embeddings, vector search, and agent-based interactions.

### VI. Separation of Concerns
Clear separation between: Book content, Backend services, Frontend/chat UI, with well-defined interfaces between components.

## Technology Stack & Standards

### Book Development
- Framework: Docusaurus
- Hosting: GitHub Pages
- Content written and managed using Claude Code
- Structure defined and enforced via Spec-Kit Plus
- All chapters must follow a consistent structure, include diagrams or code snippets where appropriate, and clearly explain why a design choice exists, not just how

### RAG Chatbot Development
- Technology stack: OpenAI for chat API, MongoDB Atlas for vector storage, Express.js for backend
- Capabilities: Answer questions about the entire book, answer questions only from user-selected text, clearly distinguish between book-grounded answers and selected-text-only answers, reject or clarify questions when required context is missing

### Retrieval & Data Handling
- All book content must be chunked, embedded, and indexed
- Embedding strategy must be documented
- Metadata must include: Chapter, Section, Source URL
- Retrieval logic must be deterministic and debuggable

## Constraints & Requirements

### Code Quality
- Clean, modular, production-grade code
- Well-commented where reasoning is non-obvious
- API keys via environment variables only
- No secrets committed to GitHub

### Security
- Secure API endpoints with proper validation
- Rate limiting to prevent abuse
- Input sanitization to prevent injection attacks

### Performance & Cost Awareness
- Efficient vector search operations
- Caching mechanisms where appropriate
- Monitoring for cost control

## Development Workflow

### Documentation Requirements
- Step-by-step setup instructions for local development and production deployment
- Architecture diagrams (ASCII or Markdown-based acceptable)
- Clear separation between book content, backend services, and frontend/chat UI
- Inline explanations for all non-trivial code blocks

### Quality Gates
- All code must pass linting and formatting
- Unit and integration tests where applicable
- End-to-end functionality verification

## Governance
Constitution supersedes all other practices; Amendments require documentation, approval, and migration plan. All PRs/reviews must verify compliance with these principles.

**Version**: 1.0.0 | **Ratified**: 2025-12-19 | **Last Amended**: 2025-12-19
