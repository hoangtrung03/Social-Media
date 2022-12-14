import { useMemo } from 'react'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { concatPagination } from '@apollo/client/utilities'

if (!process.browser) {
  global.URL = require('url').URL
}

let apolloClient

function createApolloClient() {
  const uri = process.browser
    ? new URL('/graphql', location.href)
    : new URL('/graphql', process.env.MAGENTO_URL).href

  return new ApolloClient({
    ssrMode: !process.browser,
    credentials: 'include',
    link: new HttpLink({
      uri,
      credentials: 'include'
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allPosts: concatPagination()
          }
        }
      }
    })
  })
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  if (initialState) {
    const existingCache = _apolloClient.extract()

    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }

  if (typeof window === 'undefined') return _apolloClient

  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
