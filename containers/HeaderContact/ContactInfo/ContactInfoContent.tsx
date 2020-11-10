import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  image?: string
  icon: any
  contact: string
}
const ContactInfoContent: FC<Props> = ({ image, icon, contact }) => {
  return (
    <>
      {image && <img src={image} alt="flag" className="contact-link__image" />}
      {icon && <FontAwesomeIcon icon={icon} className="contact-link__icon" />}
      <span className="contact-link__content">{contact}</span>
    </>
  )
}

export default ContactInfoContent
