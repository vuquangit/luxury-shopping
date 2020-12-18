import { FC, useState, useRef, useEffect, useContext } from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import HeaderContact from 'containers/HeaderContact'
import HeaderContent from 'containers/HeaderContent'
import HeaderSubMenu from 'containers/HeaderSubMenu'
import HeaderSearchMenu from 'containers/HeaderSearchMenu'
import { AdminStore } from 'layout/AdminStoreProvider'
import SubMenuListMobile from 'containers/SubMenuListMobile'
import ContentSubMenuListMobile from 'containers/ContentSubMenuListMobile'

import { headerDataNav, TTypeSubMenu } from './mocks/HeaderDataNav'
import MenuContentMobile from 'containers/MenuContentMobile'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const Header: FC = () => {
  const [windowSize, setWindowSize] = useState(0)
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
  const [typeSubMenu, setTypeSubMenu] = useState<TTypeSubMenu>('new')
  const { state } = useContext(AdminStore)
  // console.log(state)
  const handleOpenMenu = (typeSubMenu: TTypeSubMenu) => {
    setTypeSubMenu(typeSubMenu)
    setIsOpenMenu(true)
  }

  const handleCloseMenu = () => setIsOpenMenu(false)

  const refSubMenu = useRef(null)

  const handleClickOutside = (event: any) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (refSubMenu.current && !refSubMenu.current.contains(event.target)) {
      handleCloseMenu()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

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
    <header className="header">
      <div className="header__container">
        <nav className="header-contact">
          <HeaderContact />
        </nav>
        {state.openBar && windowSize <= 425 ? (
          <>
            <MenuContentMobile />
            {state.openSub ? <SubMenuListMobile /> : ''}
            {state.openContentSub ? <ContentSubMenuListMobile /> : ''}
          </>
        ) : (
          <nav className="header-navigation">
            <div className="header-navigation__container">
              <HeaderContent
                handleOpenMenu={handleOpenMenu}
                isOpenMenu={isOpenMenu}
              />
            </div>
          </nav>
        )}

        {windowSize <= 425 ? (
          ''
        ) : (
          <>
            {isOpenMenu && (
              <div ref={refSubMenu}>
                {typeSubMenu === 'input' ? (
                  <HeaderSearchMenu />
                ) : (
                  <HeaderSubMenu
                    dataSubMenu={headerDataNav[typeSubMenu]}
                    typeSubMenu={typeSubMenu}
                  />
                )}
              </div>
            )}
          </>
        )}
      </div>
    </header>
  )
}

export default Header
