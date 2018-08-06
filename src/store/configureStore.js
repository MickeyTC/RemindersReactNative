import reducer from '../reducers'
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, reducer)

export default initialState => {
  const store = createStore(persistedReducer, initialState)
  const persistor = persistStore(store)
  return { store, persistor }
}
