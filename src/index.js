import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { name as appName } from '../package.json'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import RouterComponent from './Router'

const AppWithStore = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterComponent />
    </PersistGate>
  </Provider>
)

AppRegistry.registerComponent(appName, () => AppWithStore)
