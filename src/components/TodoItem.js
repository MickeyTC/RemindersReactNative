import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text } from 'react-native'
import { ListItem, Icon, Card, CheckBox } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import moment from 'moment'

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      description: PropTypes.string,
      date: PropTypes.string,
      completed: PropTypes.bool,
    }),
    onToggleCompleted: PropTypes.func,
    onDeleteTodo: PropTypes.func,
    onUpdateTodo: PropTypes.func,
  }

  render() {
    const { todo, onToggleCompleted, onDeleteTodo, onUpdateTodo } = this.props
    return (
      <ListItem
        title={todo.title}
        subtitle={todo.id}
        leftIcon={
          todo.completed
            ? { name: 'check-box', color: 'black' }
            : { name: 'check-box-outline-blank', color: 'black' }
        }
        leftIconOnPress={() => onToggleCompleted(todo.id)}
        rightIcon={{ name: 'delete', color: 'red' }}
        onPressRightIcon={() => onDeleteTodo(todo.id)}
        onPress={() => Actions.todoDetail({ todo, onSave: onUpdateTodo })}
      />
    )
  }
}

const styles = StyleSheet.create({
  todoItem: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    color: 'red',
  },
})
