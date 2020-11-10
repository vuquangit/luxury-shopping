import { FC } from 'react'
import { ISubMenuItem } from 'layout/Header/mocks/HeaderDataNav'

type Props = {
  handleChooseItem: (data: number) => void
  data: ISubMenuItem[]
}

const MenuList: FC<Props> = ({ handleChooseItem, data }) => {
  return (
    <>
      {data.map((item: any, index: number) => (
        <p onClick={() => handleChooseItem(index)} key={item.id}>
          {item.label}
        </p>
      ))}
    </>
  )
}

export default MenuList
