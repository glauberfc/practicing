import * as React from 'react'
import { ApolloProvider } from 'react-apollo'

import { client } from './apollo'
import { Routes } from './routes'

class App extends React.PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    )
  }
}

export default App
