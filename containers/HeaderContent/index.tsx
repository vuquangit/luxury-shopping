import { FC, useState, useEffect } from 'react'
import ContentNav from './ContentNav'
import SearchInput from './SearchInput'
import SearchRes from './SearchRes'
type Props = {
  handleOpenMenu: (data: 'men' | 'women' | 'input') => void
  isOpenMenu: boolean
}

const HeaderContent: FC<Props> = ({ handleOpenMenu, isOpenMenu }) => {
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
        <SearchRes />
      ) : (
        <>
          <ContentNav handleOpenMenu={handleOpenMenu} isOpenMenu={isOpenMenu} />
          <SearchInput handleOpenMenu={handleOpenMenu} />
        </>
      )}
    </>
  )
}

export default HeaderContent
