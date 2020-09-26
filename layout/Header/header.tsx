import Head from 'next/head'
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
    <>
      <Head>
        <title>Luxury Shopping</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <header>
        <nav>
          <Link href="/">Homepage </Link>
          <Link href="/news">News </Link>
          <Link href="/about">About </Link>
        </nav>
      </header>
    </>
  )
}

export default Header
