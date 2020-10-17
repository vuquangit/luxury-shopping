import Router from 'next/router'
import NProgress from 'nprogress'
import { FC } from 'react'
import HeaderContact from './HeaderContact'
import HeaderContent from './HeaderContent'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const Header: FC = () => {
  return (
    <header>
      <nav className="nav-contact">
        <HeaderContact />
      </nav>
      <hr></hr>
      <nav className="nav-header">
        <HeaderContent />
      </nav>
    </header>
  )
}

export default Header
