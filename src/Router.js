import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import App from './App'
import TodoDetail from './components/TodoDetail'

const RouterComponent = () => {
  return (
    <Router>
      <Scene>
        <Scene key="app" component={App} title="Reminders" initial />
        <Scene key="addTodo" title="Add Reminder" component={TodoDetail} />
        <Scene key="editTodo" title="Edit Reminder" component={TodoDetail} />
      </Scene>
    </Router>
  )
}

export default RouterComponent
