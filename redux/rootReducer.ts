import { combineReducers } from 'redux'
import profileReducer from './Profile/Profile.reducer'
import { IProfileState } from './Profile/actionTypes'

export interface StoreState {
  profile: IProfileState
}

export default combineReducers({
  profile: profileReducer,
})
