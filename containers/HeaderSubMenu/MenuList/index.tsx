import { FC, useState } from 'react'
import { ISubMenuItem } from 'layout/Header/mocks/HeaderDataNav'

type Props = {
  handleChooseItem: (data: number) => void
  data: ISubMenuItem[]
}

const MenuList: FC<Props> = ({ handleChooseItem, data }) => {
  const [idItem, setIdItem] = useState(null)
  const handleOnclick = (item: any, index: number) => {
    handleChooseItem(index)
    setIdItem(item.id)
  }
  const _getData = () => {
    if (idItem === null) {
      return data
    } else if (idItem !== null) {
      const newData = data.map((item) => {
        if (item.id === idItem) {
          item.labelClass = 'classItem'
        } else {
          item.labelClass = 'item'
        }
        return { ...item }
      })
      return newData
    }
  }
  return (
    <>
      <ul className="menu-list">
        {_getData()?.map((item: any, index: number) => (
          <li
            className={`menu-list__${item.labelClass}`}
            onClick={() => handleOnclick(item, index)}
            key={item.id}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </>
  )
}

export default MenuList
