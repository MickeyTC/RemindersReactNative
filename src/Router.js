import React, { Component } from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import App from './App'
import TodoDetail from './components/TodoDetail'
import { addTodo } from './action/todoAction'

class RouterComponent extends Component {
  static propTypes = {
    addTodo: PropTypes.func,
  }

  onRight = () => {
    const todo = {
      id: shortid.generate(),
      title: '',
      description: '',
      date: '',
      completed: false,
    }
    Actions.addTodo({ todo, onSave: this.props.addTodo })
  }

  render() {
    return (
      <Router>
        <Scene>
          <Scene
            key="app"
            component={App}
            title="Reminders"
            initial
            rightTitle="Add"
            onRight={this.onRight}
          />
          <Scene
            key="addTodo"
            component={TodoDetail}
            title="Add Reminder"
            backTitle="Cancel"
          />
          <Scene
            key="editTodo"
            component={TodoDetail}
            title="Edit Reminder"
            backTitle="Cancel"
          />
        </Scene>
      </Router>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addTodo(todo)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(RouterComponent)
