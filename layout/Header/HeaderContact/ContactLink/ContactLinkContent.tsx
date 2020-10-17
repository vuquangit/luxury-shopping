import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  image?: string
  icon: any
  contact: string
}
const index: FC<Props> = ({ image, icon, contact }) => {
  return (
    <>
      {image && (
        <img src={image} alt="flag" className="contact-link__item--image" />
      )}
      {icon && (
        <FontAwesomeIcon icon={icon} className="contact-link__item--icon" />
      )}
      <span className="contact-link__item--content">{contact}</span>
    </>
  )
}

export default index
