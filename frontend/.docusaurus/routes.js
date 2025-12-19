import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'dac'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'de8'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'a49'),
            routes: [
              {
                path: '/docs/advanced/deployment',
                component: ComponentCreator('/docs/advanced/deployment', '5f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/advanced/performance',
                component: ComponentCreator('/docs/advanced/performance', '4f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/advanced/security',
                component: ComponentCreator('/docs/advanced/security', 'cac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ai-patterns/embeddings',
                component: ComponentCreator('/docs/ai-patterns/embeddings', 'ff0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ai-patterns/introduction',
                component: ComponentCreator('/docs/ai-patterns/introduction', '07e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ai-patterns/rag-basics',
                component: ComponentCreator('/docs/ai-patterns/rag-basics', 'a3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ai-patterns/vector-search',
                component: ComponentCreator('/docs/ai-patterns/vector-search', '47a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/conclusion',
                component: ComponentCreator('/docs/conclusion', '95e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/installation',
                component: ComponentCreator('/docs/getting-started/installation', '267'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/setup',
                component: ComponentCreator('/docs/getting-started/setup', '200'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rag-implementation/backend-setup',
                component: ComponentCreator('/docs/rag-implementation/backend-setup', 'fbb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rag-implementation/chat-integration',
                component: ComponentCreator('/docs/rag-implementation/chat-integration', '335'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rag-implementation/data-processing',
                component: ComponentCreator('/docs/rag-implementation/data-processing', 'b62'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
