import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import FaqItem from '@site/src/components/FaqItem';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function FAQHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBannerSecondary)}>
      <div className="container">
        <Heading as="h1">
          FAQ
        </Heading>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} : FAQ`}
      description="ManageMemberships Knowledge Base">
      <FAQHeader />
      <div className={clsx(styles.innerContainer)}>
        <FaqItem question="My user sees '403 Forbidden' when trying to print receipts.">
          <p>Go to the <Link to="/docs/user/users">Users</Link> section and make sure the affected user has a proper role assigned.</p>
        </FaqItem>
      </div>
    </Layout>
  );
}