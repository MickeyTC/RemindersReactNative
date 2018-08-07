import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import TodoList from './components/TodoList'
import AddButton from './components/AddButton'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <TodoList />
          <AddButton />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})
