import { FC } from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faMobileAlt,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons'

import ContactLinkContent from './ContactLinkContent'

interface IContactLink {
  id: number
  link: string | null
  image?: string
  icon: IconDefinition | null
  contact: string
}

const ContactLink: FC = () => {
  const listData: IContactLink[] = [
    {
      id: 1,
      link: '/',
      image: '/image/flag-usa.png',
      icon: null,
      contact: 'Ship to: United Kingdom',
    },
    {
      id: 2,
      link: '/',
      icon: faQuestionCircle,
      contact: 'Can we help you?',
    },
    {
      id: 3,
      link: null,
      icon: faMobileAlt,
      contact: '+44 207 998 6286',
    },
    {
      id: 4,
      link: '/',
      icon: null,
      contact: 'Sustainability',
    },
  ]

  return (
    <ul className="contact-link">
      {listData.map((item) => (
        <li key={item.id} className="contact-link__item">
          {item.link ? (
            <a href={item.link}>
              <ContactLinkContent {...item} />
            </a>
          ) : (
            <ContactLinkContent {...item} />
          )}
        </li>
      ))}
    </ul>
  )
}

export default ContactLink
