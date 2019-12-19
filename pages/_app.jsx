import App, { Container } from 'next/app';
import Head from 'next/head';
import { HoppinDesignProvider, tokens } from 'hoppin-design-system';

import 'styles/base.css';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Hoppin</title>
        </Head>
        <HoppinDesignProvider theme={tokens} context="shadower">
          <Component {...pageProps} />
        </HoppinDesignProvider>
      </Container>
    );
  }
}

export default MyApp;
