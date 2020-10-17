import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart,
  faShoppingBag,
  faUser,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'

const ContactIcon: FC = () => {
  const iconData = [
    {
      id: 1,
      link: '',
      icon: faMapMarkerAlt,
    },
    {
      id: 2,
      link: '',
      icon: faHeart,
    },
    {
      id: 3,
      link: '',
      icon: faUser,
    },
    {
      id: 4,
      link: '',
      icon: faShoppingBag,
    },
  ]
  return (
    <div>
      <ul className="contact-icon">
        {iconData.map((item) => (
          <li className="contact-icon__item" key={item.id}>
            <a href={item.link}>
              <FontAwesomeIcon icon={item.icon} style={{ height: '1.2rem' }} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactIcon
