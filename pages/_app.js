import 'tailwindcss/tailwind.css'

import { SessionProvider } from 'next-auth/react'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloclient'
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || (page => page)

  const apolloClient = useApollo(pageProps.initialApolloState)

  return getLayout(
    <ApolloProvider client={apolloClient}>
      <SessionProvider session={session}>
        {/* <Layout> */}
        <Component {...pageProps} />
        {/* </Layout> */}
      </SessionProvider>
    </ApolloProvider>
  )
}

export default MyApp
