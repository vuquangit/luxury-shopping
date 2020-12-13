import React, { useReducer } from 'react'
import { initialState, IState, reducer } from './reducer'

export const AdminStore = React.createContext<{
  state: IState
  dispatch: React.Dispatch<any>
}>({
  state: initialState,
  dispatch: () => null,
})

export const AdminStoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AdminStore.Provider value={{ state, dispatch }}>
      {children}
    </AdminStore.Provider>
  )
}
// export const useStateValue:React.FC = () => useContext(AdminStore);
