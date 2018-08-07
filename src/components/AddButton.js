import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTodo } from '../action/todoAction'
import shortid from 'shortid'

class AddButton extends Component {
  static propTypes = {
    addTodo: PropTypes.func,
  }
 
  handleClick = () => {
    const id = shortid.generate()
    const todo = {
      id,
      title: id,
      description: '',
      date: '',
      completed: false,
    }
    this.props.addTodo(todo)
  }
 
  render() {
    return (
      <View>
        <Button onPress={this.handleClick} title="Add Reminder" color="teal" />
      </View>
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
)(AddButton)
 