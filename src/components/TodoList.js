import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { Card, ButtonGroup } from 'react-native-elements'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  toggleCompletedTodo,
  deleteTodo,
  updateTodo,
} from '../action/todoAction'
import TodoItem from './TodoItem'

class TodoList extends Component {
  state = {
    selectedFilter: 1,
  }

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
    const { selectedFilter } = this.state
    const filterShow = ['All', 'Active', 'Completed']
    const showTodoList = [
      todoList,
      todoList.filter(todo => !todo.completed),
      todoList.filter(todo => todo.completed),
    ]
    const numTodo = showTodoList.map(list => list.length)
    const filterButton = (title, num) => {
      return (
        <Text>
          {title} ({num})
        </Text>
      )
    }
    return (
      <View style={styles.container}>
        <ButtonGroup
          onPress={selectedFilter => this.setState({ selectedFilter })}
          selectedIndex={selectedFilter}
          buttons={filterShow.map((title, idx) =>
            filterButton(title, numTodo[idx])
          )}
          containerStyle={styles.filterButton}
        />
        {showTodoList[selectedFilter].length > 0 && (
          <ScrollView style={styles.container}>
            <Card containerStyle={styles.todoListContainer}>
              {showTodoList[selectedFilter].map(todo => {
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
        )}
      </View>
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
  filterButton: {
    marginTop: 15,
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
