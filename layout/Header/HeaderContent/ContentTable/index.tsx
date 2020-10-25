import { FC } from 'react'
type Props = {
  handleOpenMenu: (data: string) => void
}

const ContentTable: FC<Props> = ({ handleOpenMenu }) => {
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
    <ul className="nav-header__table">
      {dataTable.map((item) =>
        item.label === 'louis vuitton' ? (
          <li key={item.id} className="nav-header__table--logo">
            {item.label}
          </li>
        ) : (
          <li
            onClick={() => handleOnclick(item)}
            key={item.id}
            className="nav-header__table--item"
          >
            {item.label}
          </li>
        )
      )}
    </ul>
  )
}

export default ContentTable
