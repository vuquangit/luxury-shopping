import { FC, useContext } from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMobileAlt,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons'
import ContactInfoContent from 'containers/HeaderContact/ContactInfo/ContactInfoContent'
import { AdminStore } from 'layout/AdminStoreProvider'

interface IContactLink {
  id: number
  link: string | null
  image?: string
  icon: IconDefinition | null
  contact: string
  label: string
}

const MenuContentMobile: FC = () => {
  const { dispatch } = useContext(AdminStore)
  const listData: IContactLink[] = [
    { label: 'new', id: 1, link: null, icon: null, contact: '' },
    { label: 'women', id: 2, link: null, icon: null, contact: '' },
    { label: 'men', id: 3, link: null, icon: null, contact: '' },
    { label: 'art of living', id: 4, link: null, icon: null, contact: '' },
    { label: 'magazine', id: 5, link: null, icon: null, contact: '' },
    {
      label: '',
      id: 6,
      link: '/',
      image: '/image/flag-usa.png',
      icon: null,
      contact: 'Ship to: United Kingdom',
    },
    {
      label: '',
      id: 7,
      link: '/',
      icon: faQuestionCircle,
      contact: 'Can we help you?',
    },
    {
      label: '',
      id: 8,
      link: null,
      icon: faMobileAlt,
      contact: '+44 207 998 6286',
    },
    {
      label: '',
      id: 9,
      link: '/',
      icon: null,
      contact: 'Sustainability',
    },
  ]
  const handleOpenSubMobile = (data: string) => {
    dispatch({
      type: 'ChangeSubMenuMobile',
      payload: true,
      status: data,
    })
  }
  return (
    <div className="menu-content-mobile">
      <ul className="menu-content-mobile__container">
        {listData.map((item) => (
          <li key={item.id} className="menu-content-mobile__container--item">
            {item.label ? (
              item.label
            ) : item.link ? (
              <a href={item.link} className="contact-link">
                <ContactInfoContent {...item} />
              </a>
            ) : (
              <ContactInfoContent {...item} />
            )}

            {['new', 'women', 'men', 'art of living'].includes(item.label) ? (
              <p onClick={() => handleOpenSubMobile(item.label)}> &#8883; </p>
            ) : (
              ''
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuContentMobile
