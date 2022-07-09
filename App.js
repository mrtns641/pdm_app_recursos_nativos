import { StyleSheet, Text, View } from 'react-native';

import lugaresReducer from './store/lugares-reducer';

import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'

import {
  Provider
} from 'react-redux'

import reduxThunk from 'redux-thunk'

import container from './navegacao/LugaresNavigator';

const rootReducer = combineReducers({
  lugares: lugaresReducer
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk))


export default function App() {
  return (
    <Provider store={store}>
      {container}
    </Provider>
  )
}
