import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from 'theme'
import PageLayout from 'components/PageLayout'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'global.css'

interface MyAppProps extends AppProps {}
export default function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props
  return (
    // <CacheProvider value={emotionCache}>
    <div>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </ThemeProvider>
    </div>
    // </CacheProvider>
  )
}
