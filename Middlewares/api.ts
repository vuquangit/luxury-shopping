import { isArray, isString, get } from 'lodash'
import { Dispatch, Action } from 'redux'
import { TStoreActionState } from 'redux/rootReducer'
import Repository from 'repository'

export const REQUEST_API = 'REQUEST_API'

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
const api = () => (next: Dispatch) => (
  action: Action | any
): TStoreActionState => {
  const requestAPI = action[REQUEST_API]
  if (!requestAPI) return next(action)

  const {
    params,
    types,
    repositoryName = '',
    repositoryFetchName = '',
  } = requestAPI

  // Expect type of requestApi action consist of: start fetch action, get success action, get fail action
  if (!isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every((type) => isString(type))) {
    throw new Error(
      'Expected action types to be strings. And action of this type is valid'
    )
  }

  const actionWith = (data = {}) => {
    const finalAction = { ...action, ...data }
    delete finalAction[REQUEST_API]
    return finalAction
  }

  const [requestType, successType, failureType] = types

  next(actionWith({ type: requestType }))

  const stocksRepository = Repository.get(repositoryName)
  const fetchRepository = get(stocksRepository, repositoryFetchName)

  return fetchRepository(params)
    .then((response: any) => {
      return next(
        actionWith({ type: successType, payload: get(response, 'data', {}) })
      )
    })
    .catch((error: any) => {
      return next(
        actionWith({
          type: failureType,
          error: error.message || 'Something wrong!!!',
        })
      )
    })
}

export default api
