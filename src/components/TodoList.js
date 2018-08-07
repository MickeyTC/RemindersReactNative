import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native'
import { Card } from 'react-native-elements'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  toggleCompletedTodo,
  deleteTodo,
  updateTodo,
} from '../action/todoAction'
import TodoItem from './TodoItem'

class TodoList extends Component {
  static propTypes = {
    todoList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string,
        description: PropTypes.string,
        date: PropTypes.string,
        completed: PropTypes.bool,
      })
    ),
    toggleCompleted: PropTypes.func,
    deleteTodo: PropTypes.func,
    updateTodo: PropTypes.func,
  }

  render() {
    const { todoList, updateTodo, deleteTodo, toggleCompleted } = this.props
    return (
      <ScrollView style={styles.container}>
        <Card containerStyle={styles.todoListContainer}>
          {todoList.map(todo => {
            console.log(todo)
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                onUpdateTodo={updateTodo}
                onDeleteTodo={deleteTodo}
                onToggleCompleted={toggleCompleted}
              />
            )
          })}
        </Card>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  todoListContainer: {
    flex: 1,
  },
})

const mapStateToProps = state => {
  return {
    todoList: state.todoReducer,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleCompleted: id => dispatch(toggleCompletedTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    updateTodo: todo => dispatch(updateTodo(todo)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
