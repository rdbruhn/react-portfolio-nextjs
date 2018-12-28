import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>moduloMoments</title>
          <meta
            name="Description"
            content="A portfolio site for work and blog posts by software engineer, Rob Bruhn."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <link rel="canonical" href="http://www.modulomoments.com" />
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx global>{`
          body {
            background: #fff;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          a,
          a:active,
          a:hover,
          a:visited {
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        `}</style>
      </html>
    );
  }
}
