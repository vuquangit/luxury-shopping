import { FC, useState, useRef, useEffect } from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import HeaderContact from 'containers/HeaderContact'
import HeaderContent from 'containers/HeaderContent'
import HeaderSubMenu from 'containers/HeaderSubMenu'
import HeaderSearchMenu from 'containers/HeaderSearchMenu'

import { headerDataNav, TTypeSubMenu } from './mocks/HeaderDataNav'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const Header: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [typeSubMenu, setTypeSubMenu] = useState<TTypeSubMenu>('new')

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

  return (
    <header className="header">
      <div className="header-container">
        <nav className="header-contact">
          <HeaderContact />
        </nav>
        <hr></hr>
        <nav className="header-navigation">
          <HeaderContent handleOpenMenu={handleOpenMenu} />
        </nav>
        <hr></hr>
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
      </div>
    </header>
  )
}

export default Header
