import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, ScrollView } from 'react-native'
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
} from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import moment from 'moment'

export default class TodoDetail extends Component {
  state = {
    id: this.props.todo.id,
    title: this.props.todo.title,
    description: this.props.todo.description,
    shortDate: !this.props.todo.date
      ? ''
      : moment(this.props.todo.date, 'YYYY-MM-DD HH:mm Z').format('DD/MM/YY'),
    shortTime: !this.props.todo.date
      ? ''
      : moment(this.props.todo.date, 'YYYY-MM-DD HH:mm Z').format('HH:mm'),
    validShortDate: true,
    validShortTime: true,
  }

  static propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      description: PropTypes.string,
      date: PropTypes.string,
      completed: PropTypes.bool,
    }),
    onSave: PropTypes.func,
  }

  handleSubmit = () => {
    const newTodo = {
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
      completed: this.props.todo.completed,
    }
    const validShortDate =
      !this.state.shortDate ||
      moment(this.state.shortDate, 'DD/MM/YY').isValid()
    const validShortTime =
      !this.state.shortTime || moment(this.state.shortTime, 'HH:mm').isValid()
    this.setState({
      validShortDate,
      validShortTime,
    })
    if (!validShortDate || !validShortTime) return
    let newMoment = null
    if (this.state.shortDate && !this.state.shortTime) {
      newMoment = moment(this.state.shortDate, 'DD/MM/YY')
    } else if (!this.state.shortDate && this.state.shortTime) {
      newMoment = moment(this.state.shortTime, 'HH:mm')
    } else if (this.state.shortDate && this.state.shortTime) {
      newMoment = moment(
        `${this.state.shortDate} ${this.state.shortTime}`,
        'DD/MM/YY HH:mm'
      )
    }
    newTodo.date = newMoment ? newMoment.format('YYYY-MM-DD HH:mm Z') : ''
    this.props.onSave(newTodo)
    Actions.pop()
  }

  render() {
    const {
      id,
      title,
      description,
      shortDate,
      shortTime,
      validShortDate,
      validShortTime,
    } = this.state
    return (
      <ScrollView style={styles.container}>
        <View style={styles.formContainer}>
          <FormLabel labelStyle={styles.formLabel}>ID</FormLabel>
          <FormInput
            value={id}
            inputStyle={styles.formInput}
            editable={false}
          />
          <FormLabel labelStyle={styles.formLabel}>Title</FormLabel>
          <FormInput
            autoFocus
            placeholder="Title"
            inputStyle={styles.formInput}
            value={title}
            onChangeText={text => this.setState({ title: text })}
          />
          <FormLabel labelStyle={styles.formLabel}>Description</FormLabel>
          <FormInput
            placeholder="Description"
            inputStyle={styles.formInput}
            multiline
            numberOfLines={3}
            value={description}
            onChangeText={text => this.setState({ description: text })}
          />
          <FormLabel labelStyle={styles.formLabel}>Due Date</FormLabel>
          <FormInput
            value={shortDate}
            placeholder="DD/MM/YY"
            inputStyle={styles.formInput}
            onChangeText={text => this.setState({ shortDate: text })}
            shake={!validShortDate}
          />
          {!validShortDate && (
            <FormValidationMessage>
              {'Invalid Date Format'}
            </FormValidationMessage>
          )}
          <FormLabel labelStyle={styles.formLabel}>Due Time</FormLabel>
          <FormInput
            value={shortTime}
            placeholder="HH:mm"
            inputStyle={styles.formInput}
            onChangeText={text => this.setState({ shortTime: text })}
            shake={!validShortTime}
          />
          {!validShortTime && (
            <FormValidationMessage>
              {'Invalid Time Format'}
            </FormValidationMessage>
          )}
        </View>
        <Button
          containerViewStyle={styles.saveButton}
          title="Save"
          icon={{ name: 'save' }}
          backgroundColor="teal"
          onPress={this.handleSubmit}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
  },
  formLabel: {
    color: 'black',
  },
  formInput: {
    color: 'dimgray',
  },
  saveButton: {
    marginTop: 20,
    marginBottom: 20,
  },
})
