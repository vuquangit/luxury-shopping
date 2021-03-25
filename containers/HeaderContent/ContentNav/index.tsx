import { FC, useState } from 'react'
import classNames from 'classnames'

type Props = {
  handleOpenMenu: (data: 'men' | 'women' | 'input') => void
  isOpenMenu: boolean
}

const ContentNav: FC<Props> = ({ handleOpenMenu, isOpenMenu }) => {
  const dataTable = [
    { label: 'louis vuitton', id: 1, classContent: 'content' },
    { label: 'new', id: 2, classContent: 'content' },
    { label: 'women', id: 3, classContent: 'content' },
    { label: 'men', id: 4, classContent: 'content' },
    { label: 'art of living', id: 5, classContent: 'content' },
    { label: 'magazine', id: 6, classContent: 'content' },
  ]
  const handleOnclick = (item: any) => {
    handleOpenMenu(item.label)
    setIdActive(item.id)
  }

  const [idActive, setIdActive] = useState(0)
  const linkClassName = (id: number) =>
    classNames('main-navigation__content', {
      'is-active-link': id === idActive && isOpenMenu,
    })

  return (
    <ul className="main-navigation">
      {dataTable.map((item) =>
        item.label === 'louis vuitton' ? (
          <li key={item.id} className="main-navigation__logo">
            {item.label}
          </li>
        ) : (
          <li
            onClick={() => handleOnclick(item)}
            key={item.id}
            className={linkClassName(item.id)}
          >
            {item.label}
          </li>
        )
      )}
    </ul>
  )
}

export default ContentNav
