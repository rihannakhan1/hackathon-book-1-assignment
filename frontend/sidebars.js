// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/installation', 'getting-started/setup'],
    },
    {
      type: 'category',
      label: 'AI-Native Patterns',
      items: [
        'ai-patterns/introduction',
        'ai-patterns/rag-basics',
        'ai-patterns/vector-search',
        'ai-patterns/embeddings',
      ],
    },
    {
      type: 'category',
      label: 'RAG Implementation',
      items: [
        'rag-implementation/backend-setup',
        'rag-implementation/data-processing',
        'rag-implementation/chat-integration',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Topics',
      items: [
        'advanced/security',
        'advanced/performance',
        'advanced/deployment',
      ],
    },
    'conclusion',
  ],
};

module.exports = sidebars;