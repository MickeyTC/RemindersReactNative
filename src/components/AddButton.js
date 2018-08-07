import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTodo } from '../action/todoAction'
import shortid from 'shortid'
import { Actions } from 'react-native-router-flux'

class AddButton extends Component {
  static propTypes = {
    addTodo: PropTypes.func,
  }

  handleClick = () => {
    const id = shortid.generate()
    const todo = {
      id,
      title: '',
      description: '',
      date: '',
      completed: false,
    }
    Actions.addTodo({ todo, onSave: this.props.addTodo })
  }

  render() {
    return (
      <View>
        <Button
          style={styles.addButton}
          title="Add Reminder"
          icon={{ name: 'add' }}
          backgroundColor="teal"
          onPress={this.handleClick}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  addButton: {
    marginBottom: 20,
  },
})

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addTodo(todo)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddButton)
