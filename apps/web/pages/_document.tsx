import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />

        {/* Global Metadata */}
        <meta
          name="keywords"
          content="crypto, cryptocurrency, tracker, portfolio, bitcoin, ethereum"
        />
        <meta name="author" content="Your Name" />

        {/* Global Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Your Crypto Tracker" />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:url" content="https://your-crypto-tracker.com" />

        {/* Global Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/twitter-image.png" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
