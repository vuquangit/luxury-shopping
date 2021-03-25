import { FC, useContext } from 'react'
import { AdminStore } from 'layout/AdminStoreProvider'

const ContentSubMenuListMobile: FC = () => {
  const { state, dispatch } = useContext(AdminStore)
  // console.log('object:', state)
  const handleClose = () => {
    dispatch({
      type: 'OpenSubContent',
      payload: false,
    })
  }
  return (
    <div className="content-menuMobile">
      <div className="content-menuMobile__title">
        <p className="content-menuMobile__title--symbol" onClick={handleClose}>
          &#8882;
        </p>
        <p className="content-menuMobile__title--content">
          {state.labelContentSubMenu}
        </p>
      </div>
      <ul className="content-menuMobile__list">
        {state.dataContentSubMobile[0].dataItem.map((item: any) => (
          <li className="content-menuMobile__list--item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContentSubMenuListMobile
