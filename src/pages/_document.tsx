import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/onf1knq.css" />
      </Head>
      <body className="flex flex-col min-w-[375px] w-full min-h-[100vh] mx-auto leading-[1.5] text-primary">
        <div className="noise-overlay" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
