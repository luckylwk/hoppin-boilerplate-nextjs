import { Fragment } from 'react';
import Head from 'next/head';

import { Footer } from 'components/Layout';

const DEFAULT_DESCRIPTION = `Hoppin is a two-sided marketplace in the workforce innovation space that enables dynamic professionals to try and learn from different jobs through job shadowing.`;
const DEFAULT_TITLE = `Hoppin, the Job Shadowing Marketplace`;

const LayoutComponent = ({ title, description, children }) => (
  <Fragment>
    <Head>
      <title>{title || DEFAULT_TITLE}</title>
      <meta name="description" content={description || DEFAULT_DESCRIPTION} />
      <meta
        name="keywords"
        content="Hoppin,Hopper,Hosting,Job shadowing,Job shadowing marketplace,Try any job,Job experience,Work experience,Future of work"
      />

      <meta property="og:url" content="https://gohoppin.com/?ref=og" />
      <meta property="og:title" content={title || DEFAULT_TITLE} />
      <meta
        property="og:site_name"
        content="Hoppin, the Job Shadowing Marketplace"
      />
      <meta
        property="og:description"
        content={description || DEFAULT_DESCRIPTION}
      />
      <meta property="og:image" content="/images/og-white-on-gradient.png" />
      <meta property="og:type" content="website" />
    </Head>
    {children}
    <Footer />
  </Fragment>
);

export default LayoutComponent;
