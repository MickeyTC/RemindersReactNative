import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PropTypes from 'prop-types'

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
    const { todo } = this.props
    return (
      <View>
        <Text style={styles.todoItem}>{todo.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  todoItem: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    color: 'black',
  },
})
