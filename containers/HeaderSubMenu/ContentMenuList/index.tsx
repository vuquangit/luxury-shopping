import { FC } from 'react'
import { ISubMenuItem } from 'layout/Header/mocks/HeaderDataNav'

type Props = {
  data: ISubMenuItem
}

const ContentMenuList: FC<Props> = ({ data }) => {
  return (
    <>
      {data.dataItem.map((item: any) => (
        <p key={item}>{item}</p>
      ))}
    </>
  )
}

export default ContentMenuList
