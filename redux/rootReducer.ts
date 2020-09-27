import { combineReducers } from 'redux'
import profileReducer from './Profile/Profile.reducer'

const rootReducer = combineReducers({
  profile: profileReducer,
})

export type TStoreState = ReturnType<typeof rootReducer>
export default rootReducer
