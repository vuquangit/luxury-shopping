import React from 'react'
// import App from 'next/app'
import type { AppProps /*, AppContext */ } from 'next/app'
import { Provider } from 'react-redux'

import { useStore } from 'redux/store'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const appProps = await App.getInitialProps(appContext)
//   return { ...appProps }
// }

export default MyApp
