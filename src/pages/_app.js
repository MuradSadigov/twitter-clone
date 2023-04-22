/* eslint-disable no-unused-vars */
import '../styles/globals.css'
import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import 'whatwg-fetch'
import { Provider } from 'react-redux'
import { store } from '../store'

export default function App ({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}
