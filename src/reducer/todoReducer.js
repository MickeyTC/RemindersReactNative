import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETED_TODO,
} from '../constants/ActionTypes'

export const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo]

    case UPDATE_TODO:
      return state.map(todo => {
        if (todo.id === action.todo.id) return action.todo
        return todo
      })

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)

    case TOGGLE_COMPLETED_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })

    default:
      return state
  }
}
