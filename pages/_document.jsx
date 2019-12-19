import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
          />

          <meta name="copyright" content="Hoppin Limited" />
          <meta name="theme-color" content="#000000" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />

          <link
            rel="icon"
            href="https://storage.googleapis.com/hoppin-platform/icons/hoppin_favicon_rounded_32x32.png"
            type="image/png"
          />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,500,600,700"
            rel="stylesheet"
          />

          <script
            defer
            src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
