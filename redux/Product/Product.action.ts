import { REQUEST_API } from 'Middlewares/api'
import * as actionTypes from './actionTypes'
// import { ThunkAction } from 'redux-thunk'
// import { Action, ActionCreator  , Dispatch } from 'redux'

// import { TStoreState } from '../rootReducer'
// import Repository from 'repository'

// type AppThunk = ThunkAction<void, TStoreState, null, Action<string>>
// export type AppThunkCreator = ActionCreator< ThunkAction<void, TStoreState, null, Action<string>> >;

export const updateProduct = (params = {}): any => ({
  [REQUEST_API]: {
    types: [
      actionTypes.PRODUCT_REQUEST,
      actionTypes.PRODUCT_SUCCESS,
      actionTypes.PRODUCT_FAILURE,
    ],
    ...params,
    repositoryName: 'product',
    repositoryFetchName: 'fetchProduct',
  },
})

// export const updateProduct_2: AppThunk = (params) => {
//   return (dispatch: Dispatch): Action => {
//     dispatch({ type: actionTypes.PRODUCT_REQUEST })

//     const stocksRepository = Repository.get('product')

//     return stocksRepository
//       .fetchProduct(params)
//       .then((response: any) => {
//         return dispatch({
//           type: actionTypes.PRODUCT_SUCCESS,
//           payload: response.data,
//         })
//       })
//       .catch((error: any) => {
//         return dispatch({
//           type: actionTypes.PRODUCT_FAILURE,
//           error,
//         })
//       })
//   }
// }

export const clearProduct = (): any => ({
  type: actionTypes.PRODUCT_CLEAR,
})
