// import InputMenu from 'layout/Header/SubMenu/InputMenu'
import { FC, useState } from 'react'
import ContentMenuList from './ContentMenuList'
import MenuList from './MenuList'
import { ISubMenuItem, TTypeSubMenu } from 'layout/Header/mocks/HeaderDataNav'

type Props = {
  dataSubMenu: ISubMenuItem[]
  typeSubMenu: TTypeSubMenu
}

const HeaderSubMenu: FC<Props> = ({ dataSubMenu, typeSubMenu }) => {
  const [subMenuIndex, setSubMenuIndex] = useState(0)
  const handleChooseDataItem = (index: number) => {
    setSubMenuIndex(index)
  }

  return (
    <div className="subMenu">
      <div className="subMenu__item">
        <div className="subMenu__item--container">
          <MenuList
            handleChooseItem={handleChooseDataItem}
            data={dataSubMenu}
          />
        </div>
      </div>
      <div className="subMenu__item-detail">
        <div className="subMenu__item-detail--container">
          <ContentMenuList data={dataSubMenu[subMenuIndex]} />
        </div>
      </div>
      <div className="subMenu__img">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img
            src={`/image/${typeSubMenu}/${dataSubMenu[subMenuIndex].label}.jpg`}
            alt="art"
          />
        </a>
      </div>
    </div>
  )
}

export default HeaderSubMenu
