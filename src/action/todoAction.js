import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETED_TODO,
} from '../constants/ActionTypes'

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    todo,
  }
}

export const updateTodo = todo => {
  return {
    type: UPDATE_TODO,
    todo,
  }
}

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id,
  }
}

export const toggleCompletedTodo = id => {
  return {
    type: TOGGLE_COMPLETED_TODO,
    id,
  }
}
