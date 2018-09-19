import React from 'react'
import { render } from 'react-dom'
// import ApolloClient from 'apollo-boost'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
// import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink, concat } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
// import { InMemoryCache } from 'apollo-boost'
import { API_AUTH_TOKEN } from './config/config'
import App from './components/App'

const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql' })

// const authMiddleware = new ApolloLink((operation, forward) => {
//   // add the authorization to the headers
//   operation.setContext({
//     headers: {
//       authorization: `Bearer ${API_AUTH_TOKEN}`,
//     },
//   })

//   return forward(operation)
// })
const link = new HttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${API_AUTH_TOKEN}`,
  },
})
const cache = new InMemoryCache({})
const client = new ApolloClient({
  link,
  cache,
})
console.log(client)

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.querySelector('#root')
)
