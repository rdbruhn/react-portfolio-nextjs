import Head from "next/head";
export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      body {
        background: #fff;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
);
