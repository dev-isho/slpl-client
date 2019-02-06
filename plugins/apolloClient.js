import 'isomorphic-fetch'
import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client'

const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://slpl-server.herokuapp.com',
    transportBatching: true,
  }),
  queryTransformer: addTypename,
  dataIdFromObject: r => r.id,
})

export default apolloClient
