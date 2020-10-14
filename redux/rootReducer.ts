import { combineReducers } from 'redux'
import profileReducer from './Profile/Profile.reducer'
import productReducer from './Product/Product.reducer'

import { IProductState, ProductActionTypes } from 'redux/Product/actionTypes'
import { IProfileState, ProfileActionTypes } from 'redux/Profile/actionTypes'

const rootReducer = combineReducers({
  profile: profileReducer,
  product: productReducer,
})

export interface TStoreState {
  profile: IProfileState
  product: IProductState
}

export type TStoreActionState = ProductActionTypes | ProfileActionTypes

export default rootReducer
