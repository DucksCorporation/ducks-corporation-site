import { Html, Head, Main, NextScript } from 'next/document'

export default () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <body>
      <noscript>Veuillez activer JavaScript pour faire fonctionner le site correctement !</noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}