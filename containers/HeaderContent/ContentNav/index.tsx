import { FC } from 'react'
type Props = {
  handleOpenMenu: (data: 'men' | 'women' | 'input') => void
}

const ContentNav: FC<Props> = ({ handleOpenMenu }) => {
  const dataTable = [
    { label: 'louis vuitton', id: 1 },
    { label: 'new', id: 2 },
    { label: 'women', id: 3 },
    { label: 'men', id: 4 },
    { label: 'art of living', id: 5 },
    { label: 'magazine', id: 6 },
  ]
  const handleOnclick = (item: any) => {
    handleOpenMenu(item.label)
  }
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
            className="main-navigation__content"
          >
            {item.label}
          </li>
        )
      )}
    </ul>
  )
}

export default ContentNav
