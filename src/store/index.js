import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

import reducers from '../reducers/'
import initialState from './initialState'

const SagaMiddleware = createSagaMiddleware()

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers(reducers),
  initialState,
  composeEnhancers(applyMiddleware(SagaMiddleware, thunk)),
)

export default store

