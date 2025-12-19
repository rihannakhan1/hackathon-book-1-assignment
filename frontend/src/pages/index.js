import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="text--center padding-horiz--md">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Start Reading Now
            </Link>
            <Link
              className="button button--outline button--primary button--lg"
              to="/docs/getting-started/setup">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({ title, description, icon, delay = 0 }) {
  return (
    <div
      className="col col--4"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={clsx('card', styles.featureCard)}>
        <div className={clsx('card__body', styles.featureCardBody)}>
          <div className={styles.featureIcon}>{icon}</div>
          <h3 className={styles.featureTitle}>{title}</h3>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

function StatsSection() {
  return (
    <section className={styles.stats}>
      <div className="container">
        <div className="row">
          <div className="col col--4 text--center">
            <div className={styles.statNumber}>50+</div>
            <div className={styles.statLabel}>Patterns</div>
          </div>
          <div className="col col--4 text--center">
            <div className={styles.statNumber}>10K+</div>
            <div className={styles.statLabel}>Developers</div>
          </div>
          <div className="col col--4 text--center">
            <div className={styles.statNumber}>24/7</div>
            <div className={styles.statLabel}>AI Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  const features = [
    {
      title: 'AI-Native Architecture',
      description: 'Learn cutting-edge patterns for building AI-powered applications that scale efficiently.',
      icon: '🤖',
    },
    {
      title: 'RAG Systems',
      description: 'Master Retrieval-Augmented Generation techniques for building intelligent applications.',
      icon: '🧠',
    },
    {
      title: 'Interactive Learning',
      description: 'Engage with our AI assistant to get real-time answers to your technical questions.',
      icon: '💬',
    },
  ];

  return (
    <Layout
      title={`AI-Spec Driven Technical Book`}
      description="A comprehensive guide to AI-native software patterns with embedded RAG chatbot">
      <HomepageHeader />
      <main>
        <StatsSection />
        <section className={styles.features}>
          <div className="container padding-vert--lg">
            <div className="row">
              <div className="col col--8 col--offset-2 text--center padding-vert--lg">
                <h2 className={styles.sectionTitle}>Transform Your Development Workflow</h2>
                <p className={styles.sectionSubtitle}>
                  Discover proven patterns and practices for building next-generation AI applications.
                </p>
              </div>
            </div>
            <div className="row">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  delay={index * 150}
                />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.showcase}>
          <div className="container padding-vert--lg">
            <div className="row">
              <div className="col col--8 col--offset-2 text--center">
                <h2 className={styles.sectionTitle}>Why Choose AI-Spec?</h2>
                <div className={styles.showcaseGrid}>
                  <div className={styles.showcaseItem}>
                    <h3>Comprehensive</h3>
                    <p>Covers everything from basics to advanced implementation patterns</p>
                  </div>
                  <div className={styles.showcaseItem}>
                    <h3>Practical</h3>
                    <p>Real-world examples you can implement in your projects today</p>
                  </div>
                  <div className={styles.showcaseItem}>
                    <h3>Interactive</h3>
                    <p>AI-powered assistant for instant help and clarification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}