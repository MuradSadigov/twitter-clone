/* eslint-disable no-unused-vars */
import '../styles/globals.css'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { SessionProvider } from 'next-auth/react'
import 'whatwg-fetch'

export default function App ({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  )
}
