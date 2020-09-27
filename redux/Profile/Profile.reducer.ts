import * as actionTypes from './actionTypes'

const initialState: actionTypes.IProfileState = {
  isFetching: false,
  data: {},
  error: false,
}

const profileReducer = (
  state = initialState,
  action: actionTypes.ProfileActionTypes
): actionTypes.IProfileState => {
  switch (action.type) {
    case actionTypes.PROFILE_UPDATE:
      return {
        ...state,
        data: { ...state.data, ...action.payload },
      }
    case actionTypes.PROFILE_CLEAR:
      return {
        ...state,
        data: { name: '' },
        error: false,
        isFetching: false,
      }

    default:
      return state
  }
}

export default profileReducer
