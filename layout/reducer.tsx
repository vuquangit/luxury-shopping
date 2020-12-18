import // ISubMenuItem,
// TTypeSubMenu,
// ISubMenuList,
'layout/Header/mocks/HeaderDataNav'
import { headerDataNav } from 'layout/Header/mocks/HeaderDataNav'
export interface IState {
  openBar: boolean
  openSub: boolean
  openContentSub: boolean
  dataSubmenuMobile: any
  dataContentSubMobile: any
  labelSubMenu: string
  labelContentSubMenu: string
}
export const initialState: IState = {
  openBar: false,
  openSub: false,
  openContentSub: false,
  dataSubmenuMobile: null,
  dataContentSubMobile: null,
  labelSubMenu: '',
  labelContentSubMenu: '',
}
interface IChangeBar {
  type: string
  payload: boolean
  status: string
  data: any
}
// interface IChangeSubMenuMobile {
//   type: string
//   payload: boolean
//   status: string
//   data:any
// }

export type Action = IChangeBar

type Reducer<IState, Action> = (state: IState, action: Action) => IState

export const reducer: Reducer<IState, Action> = (
  state: IState,
  action: Action
) => {
  // console.log('action', action)
  switch (action.type) {
    case 'ChangeBar':
      return {
        ...state,
        openBar: action.payload,
      }
    case 'ChangeSubMenuMobile': {
      const keyWord = action.status
      const filtered = Object.fromEntries(
        Object.entries(headerDataNav).filter(([key]) => key === keyWord)
      )
      // console.log('key:', filtered[keyWord])
      return {
        ...state,
        openSub: action.payload,
        dataSubmenuMobile: filtered[keyWord],
        labelSubMenu: keyWord,
      }
    }
    case 'OpenSubContent': {
      const datatemp = action.data
      const filters = datatemp?.filter(
        (item: any) => item.label === action.status
      )
      // console.log('datatemp:', filters)
      return {
        ...state,
        openContentSub: action.payload,
        dataContentSubMobile: filters,
        labelContentSubMenu: action.status,
      }
    }
    default:
      return state
  }
}
