import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import FaqItem from '@site/src/components/FaqItem';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function ChangeLogHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBannerSecondary)}>
      <div className="container">
        <Heading as="h1">
          Change Log
        </Heading>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} : Change Log`}
      description="ManageMemberships Knowledge Base">
      <ChangeLogHeader />
      <div className={clsx(styles.innerContainer)}>
        <p>All notable changes to the platform will be documented here.</p>
        <hr/>
        <h2>[1.2.1] – 2025-05-18</h2>
        <ul>
          <li>Formal changelog process is put in place</li>
        </ul>
      </div>
    </Layout>
  );
}
