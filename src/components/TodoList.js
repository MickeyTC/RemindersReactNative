import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
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
      <View style={styles.todoListContainer}>
        <FlatList
          style={styles.todoListContainer}
          data={todoList}
          keyExtractor={todo => todo.id}
          renderItem={({ item }) => {
            console.log(item)
            return (
              <TodoItem
                todo={item}
                onUpdateTodo={updateTodo}
                onDeleteTodo={deleteTodo}
                onToggleCompleted={toggleCompleted}
              />
            )
          }}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
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
