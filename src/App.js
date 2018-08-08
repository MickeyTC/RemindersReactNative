import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import TodoList from './components/TodoList'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TodoList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})
