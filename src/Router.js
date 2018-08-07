import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import App from './App'
import TodoDetail from './components/TodoDetail'

const RouterComponent = () => {
  return (
    <Router>
      <Scene>
        <Scene key="app" component={App} title="Reminders" initial />
        <Scene key="todoDetail" component={TodoDetail} />
      </Scene>
    </Router>
  )
}

export default RouterComponent
