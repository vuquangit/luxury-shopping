import { DefaultLayout } from 'layout'
import { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { get, isEqual } from 'lodash'

import { updateProfile } from 'redux/Profile/Profile.action'
import { IProfileData } from 'redux/Profile/actionTypes'
import { TStoreState } from 'redux/rootReducer'
import { updateProduct } from 'redux/Product/Product.action'

import Repository from 'repository'

const stocksRepository = Repository.get('stocks')

type Props = {}

const HomePage: FC<Props> = () => {
  const profileData: IProfileData = useSelector(
    (state: TStoreState) => get(state, 'profile.data', {}),
    isEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateProfile({ name: 'Quang', age: 18 }))

    const params = {}

    dispatch(updateProduct(params))

    fetchAllStock()
  }, [dispatch])

  const fetchAllStock = () => {
    stocksRepository
      .fetchAllStock()
      .then((response: any) => {
        // eslint-disable-next-line no-console
        console.log('stocks', response.data)
      })
      .catch((error: any) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  }

  return (
    <DefaultLayout>
      <div className="container">This is new HomePage</div>
      <p>My name is {profileData.name}</p>
    </DefaultLayout>
  )
}

export default HomePage
