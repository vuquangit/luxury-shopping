export interface IState {
  openBar: boolean
  openSub: boolean
}
export const initialState: IState = {
  openBar: false,
  openSub: false,
}
interface IChangeBar {
  // type: 'ChangeBar'||'ChangeSub'
  type: string
  payload: boolean
}

export type Action = IChangeBar

type Reducer<IState, Action> = (state: IState, action: Action) => IState

export const reducer: Reducer<IState, Action> = (
  state: IState,
  action: Action
) => {
  switch (action.type) {
    case 'ChangeBar':
      return {
        ...state,
        openBar: action.payload,
      }
    case 'ChangeSub':
      return {
        ...state,
        openSub: action.payload,
      }
    default:
      return state
  }
}
