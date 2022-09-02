// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(props) {
  return (
    <Html>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700&display=swap" rel="stylesheet" />
    </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}