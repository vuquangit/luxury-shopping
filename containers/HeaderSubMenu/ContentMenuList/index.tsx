import { FC } from 'react'
import { ISubMenuItem } from 'layout/Header/mocks/HeaderDataNav'

type Props = {
  data: ISubMenuItem
}

const ContentMenuList: FC<Props> = ({ data }) => {
  return (
    <>
      <ul className="content-menu">
        {data.dataItem.map((item: any) =>
          item === 'BY STYLE' ? (
            <li className="content-menu__item" key={item}>
              <strong>{item}</strong>
            </li>
          ) : (
            <li className="content-menu__item" key={item}>
              {item}
            </li>
          )
        )}
      </ul>
    </>
  )
}

export default ContentMenuList
