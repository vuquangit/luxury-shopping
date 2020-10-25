import { FC, useState } from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import HeaderContact from './HeaderContact'
import HeaderContent from './HeaderContent'
import SubMenu from './SubMenu'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const Header: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [dataReceive, setDataReceive] = useState('')
  const handleOpenMenu = (data: string) => {
    // console.log('header nhan dc:',data)
    setDataReceive(data)
    setIsOpenMenu(true)
  }
  const handleCloseMenu = () => setIsOpenMenu(false)

  return (
    <header>
      <div className="header-container">
        <nav className="nav-contact">
          <HeaderContact />
        </nav>
        <hr></hr>
        <nav className="nav-header">
          <HeaderContent handleOpenMenu={handleOpenMenu} />
        </nav>
        <hr></hr>
        {isOpenMenu && (
          <SubMenu
            dataReceive={dataReceive}
            handleCloseMenu={handleCloseMenu}
          />
        )}
      </div>
    </header>
  )
}

export default Header
