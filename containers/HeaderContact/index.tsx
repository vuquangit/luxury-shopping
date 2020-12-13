import { FC, useEffect, useState } from 'react'
// import { checkServerIdentity } from 'tls'
import ContactIcon from './ContactIcon'
import ContactInfo from './ContactInfo'
import HeaderContactResponsive from './HeaderContactResponsive'

const HeaderContact: FC = () => {
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
    <>
      {windowSize <= 425 ? (
        <HeaderContactResponsive />
      ) : (
        <>
          <ContactInfo />
          <ContactIcon />
        </>
      )}
    </>
  )
}

export default HeaderContact
