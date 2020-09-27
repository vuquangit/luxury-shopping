import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { useMemo } from 'react'

import rootReducer, { TStoreState } from './rootReducer'

let store: any

const initStore = (initialState?: TStoreState) => {
  const isDevEnv: boolean = process.env.NODE_ENV === 'development'

  const middlewares = isDevEnv
    ? [thunkMiddleware, createLogger()]
    : [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  return createStore(
    rootReducer,
    initialState,
    isDevEnv
      ? composeWithDevTools(middlewareEnhancer)
      : compose(middlewareEnhancer)
  )
}

export const initializeStore = (preloadedState?: TStoreState): any => {
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

export const useStore = (initialState: TStoreState): any => {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
