import { get } from 'lodash'
import { Reducer } from 'redux'
import * as actionTypes from './actionTypes'

const initialState: actionTypes.IProductState = {
  isFetching: false,
  data: null,
  error: null,
}

const productReducer: Reducer<actionTypes.IProductState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case actionTypes.PRODUCT_REQUEST:
      return {
        ...state,
        isFetching: true,
        data: null,
        error: null,
      }
    case actionTypes.PRODUCT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: { ...get(action, 'payload', {}) },
        error: null,
      }
    case actionTypes.PRODUCT_FAILURE:
      return {
        ...state,
        isFetching: false,
        data: null,
        error: action.error,
      }

    case actionTypes.PRODUCT_CLEAR:
      return {
        ...state,
        isFetching: false,
        data: null,
        error: '',
      }

    default:
      return state
  }
}

export default productReducer
