import { FC } from 'react'
import Link from 'next/link'

const ContentTable: FC = () => {
  return (
    <ul className="nav-header__table">
      <li className="nav-header__table--logo">louis vuitton</li>
      <li className="nav-header__table--item">
        <Link href="/new">new </Link>
      </li>
      <li className="nav-header__table--item">
        <Link href="/women">women </Link>
      </li>
      <li className="nav-header__table--item">
        <Link href="/men">men </Link>
      </li>
      <li className="nav-header__table--item">
        <Link href="/art-of-living">art of living </Link>
      </li>
      <li className="nav-header__table--item">
        <Link href="/magazine">magazine </Link>
      </li>
    </ul>
  )
}

export default ContentTable
