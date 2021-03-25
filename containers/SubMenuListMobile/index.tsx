import { FC, useContext } from 'react'
import { AdminStore } from 'layout/AdminStoreProvider'

const MenuList: FC = () => {
  const { state, dispatch } = useContext(AdminStore)
  // console.log('insub:',state.dataSubmenuMobile);
  const handleCloseSub = () => {
    dispatch({
      type: 'ChangeSubMenuMobile',
      payload: false,
    })
  }
  const handleOpenSubContent = (data: string) => {
    dispatch({
      type: 'OpenSubContent',
      payload: true,
      status: data,
      data: state.dataSubmenuMobile,
    })
  }
  return (
    <div className="sub-menuMobile">
      <div className="sub-menuMobile__title">
        <div className="sub-menuMobile__title--symbol" onClick={handleCloseSub}>
          &#8882;
        </div>
        <div className="sub-menuMobile__title--content">
          {state.labelSubMenu}
        </div>
      </div>
      <ul className="sub-menuMobile__list">
        {state.dataSubmenuMobile.map((item: any) => (
          <li className="sub-menuMobile__list--item" key={item.id}>
            {item.label}
            <p onClick={() => handleOpenSubContent(item.label)}>&#8883; </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuList
