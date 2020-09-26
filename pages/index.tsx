import { DefaultLayout } from 'layout'
import { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { get, isEqual } from 'lodash'

import { updateProfile } from 'redux/Profile/Profile.action'
import { IProfileData } from 'redux/Profile/actionTypes'

const HomePage: FC = () => {
  const profileData: IProfileData = useSelector(
    (state = {}) => get(state, 'profile.data', {}),
    isEqual()
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateProfile({ name: 'Quang', age: 18 }))
  }, [dispatch])

  return (
    <DefaultLayout>
      <div className="container">This is new HomePage</div>
      <p>My name is {profileData.name}</p>
    </DefaultLayout>
  )
}

export default HomePage
