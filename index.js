import React from 'react'
import {AppRegistry, I18nManager, LogBox} from 'react-native'
import App from './src/index'
import {name as appName} from './app.json'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import Config from 'react-native-config'

// Initialize Apollo Client with the BaseUrl
global.client = new ApolloClient({
  uri: `${Config.BASE_URL}/v1`,
  cache: new InMemoryCache({}),
})

// Remove on production
LogBox.ignoreAllLogs(true)
/**
 * Root of the application wrapped by the ApolloProvider
 */
const Root = () => (
  <ApolloProvider client={global.client}>
    <App />
  </ApolloProvider>
)

AppRegistry.registerComponent(appName, () => Root)
