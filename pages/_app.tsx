import React from 'react'
// import App from 'next/app'
import Head from 'next/head'
import type { AppProps /*, AppContext */ } from 'next/app'
import { Provider } from 'react-redux'
import { useStore } from 'redux/store'

import '../styles/styles.scss'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const initialState: any = {}
  const store = useStore(initialState)

  return (
    <>
      <Head>
        <title>Luxury Shopping</title>
        <link rel="icon" href="/image/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/css/nprogress.css" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const appProps = await App.getInitialProps(appContext)
//   return { ...appProps }
// }

export default MyApp
