import 'tailwindcss/tailwind.css'

import { SessionProvider } from 'next-auth/react'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloclient'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || (page => page)

  const apolloClient = useApollo(pageProps.initialApolloState)

  return getLayout(
    <ApolloProvider client={apolloClient}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ApolloProvider>
  )
}

export default MyApp
