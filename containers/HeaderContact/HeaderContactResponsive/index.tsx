import { FC, useContext } from 'react'
import {
  faBars,
  faHeart,
  faShoppingBag,
  faUser,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AdminStore } from 'layout/AdminStoreProvider'

const ContactResContent: FC = () => {
  const { state, dispatch } = useContext(AdminStore)
  // const [barFlag, setBarFlag] = useState<IState>(state)
  const handleOpenBar = () => {
    // setBarFlag(!barFlag)
    dispatch({
      type: 'ChangeBar',
      payload: !state.openBar,
    })
  }
  return (
    <div className="contact-responsive">
      <div className="contact-responsive__icon">
        <div className="contact-responsive__icon--item">
          <FontAwesomeIcon
            onClick={handleOpenBar}
            icon={state.openBar === false ? faBars : faTimesCircle}
            style={{ height: '1.2rem' }}
          />
          <FontAwesomeIcon icon={faHeart} style={{ height: '1.2rem' }} />
        </div>
        <div className="contact-responsive__icon--logo">
          <h5>louis vuiton</h5>
        </div>
        <div className="contact-responsive__icon--item">
          <FontAwesomeIcon icon={faUser} style={{ height: '1.2rem' }} />
          <FontAwesomeIcon icon={faShoppingBag} style={{ height: '1.2rem' }} />
        </div>
      </div>
    </div>
  )
}

export default ContactResContent
