import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link href='https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap' rel='stylesheet' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700&family=Lora:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
