import { applyMiddleware, compose, createStore, Store } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { useMemo } from 'react'

import rootReducer, { TStoreState } from './rootReducer'
import api from 'Middlewares/api'

let store: any

const initStore = (initialState?: TStoreState) => {
  const isDevEnv: boolean = process.env.NODE_ENV === 'development'

  const middlewares = isDevEnv
    ? [thunkMiddleware, api, createLogger()]
    : [thunkMiddleware, api]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  return createStore(
    rootReducer,
    initialState,
    isDevEnv
      ? composeWithDevTools(middlewareEnhancer)
      : compose(middlewareEnhancer)
  )
}

export const initializeStore = (
  preloadedState?: TStoreState
): Store<TStoreState> => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export const useStore = (preloadedState?: TStoreState): any => {
  const store = useMemo(() => initializeStore(preloadedState), [preloadedState])
  return store
}
