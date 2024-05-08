import Document, { Html, Head, Main, NextScript } from 'next/document'

export const metadata = {
  title: 'Find - Persons',
  description: 'A professional website for finding persons',
  lang: 'en',
  favicon: '/favicon.svg',
  charSet: 'UTF-8'
}

class MyDocument extends Document {
  render() {
    return (
      <Html lang={metadata.lang}>
        <Head>
          <meta charSet={metadata.charSet} />
          <meta name="description" content={metadata.description} />
          
          {/* Google tag (gtag.js) ADWORDS */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-340874452"></script>
          <script dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-340874452');
            `
          }} />

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