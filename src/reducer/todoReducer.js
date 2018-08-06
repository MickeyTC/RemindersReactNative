import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETED_TODO,
} from '../constants/ActionTypes'

export const initialState = []

export default (state = initialState, action) => {
  const newTodoList = state.map(todo => ({ ...todo }))
  switch (action.type) {
    case ADD_TODO:
      newTodoList.push(action.todo)
      return newTodoList
    case UPDATE_TODO:
      const idxTodo = newTodoList.findIndex(todo => todo.id === action.todo.id)
      if (idxTodo === -1) return state
      newTodoList.splice(idxTodo, 1, action.todo)
      return newTodoList
    case DELETE_TODO:
      const deletedTodoList = newTodoList.filter(todo => todo.id !== action.id)
      return deletedTodoList
    case TOGGLE_COMPLETED_TODO:
      const foundTodo = newTodoList.find(todo => todo.id === action.id)
      if (foundTodo === undefined) return state
      foundTodo.completed = !foundTodo.completed
      return newTodoList
    default:
      return state
  }
}
