import Router from 'next/router'
import NProgress from 'nprogress'
import { FC } from 'react'
import Link from 'next/link'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const Header: FC = () => {
  return (
    <header>
      <nav>
        <Link href="/">Homepage </Link>
        <Link href="/new">New </Link>
        <Link href="/women">Women </Link>
        <Link href="/men">Men </Link>
        <Link href="/art-of-living">Art Of Living </Link>
        <Link href="/magazine">Magazine </Link>
      </nav>
    </header>
  )
}

export default Header
