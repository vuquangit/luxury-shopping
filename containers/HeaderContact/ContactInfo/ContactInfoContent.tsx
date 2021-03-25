import { FC, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  image?: string
  icon: any
  contact: string
}
const ContactInfoContent: FC<Props> = ({ image, icon, contact }) => {
  const [windowSize, setWindowSize] = useState(0)

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setWindowSize(window.innerWidth)
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount
  return (
    <div className="contact-link">
      {image && <img src={image} alt="flag" className="contact-link__image" />}
      {windowSize <= 768 &&
      windowSize > 425 &&
      contact === 'Can we help you?' ? (
        ''
      ) : (
        <>
          {icon && (
            <FontAwesomeIcon icon={icon} className="contact-link__icon" />
          )}
          <span className="contact-link__content">{contact}</span>
        </>
      )}
    </div>
  )
}

export default ContactInfoContent
