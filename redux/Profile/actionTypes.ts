export const PROFILE_UPDATE = 'PROFILE_UPDATE'
export const PROFILE_CLEAR = 'PROFILE_CLEAR'

export interface IProfileData {
  name?: string
  firstName?: string
  lastName?: string
  age?: number
}

export interface IProfileState {
  isFetching: boolean
  data: IProfileData
  error?: string
}

interface ProfileUpdateAction {
  type: typeof PROFILE_UPDATE
  payload: IProfileData
}

interface ProfileClearAction {
  type: typeof PROFILE_CLEAR
}

export type ProfileActionTypes = ProfileUpdateAction | ProfileClearAction
