import { FC } from 'react'
import ContentTable from './ContentTable'
import ContentInput from './ContentInput'
type Props = {
  handleOpenMenu: (data: string) => void
}

const HeaderContent: FC<Props> = ({ handleOpenMenu }) => {
  return (
    <>
      <ContentTable handleOpenMenu={handleOpenMenu} />
      <ContentInput handleOpenMenu={handleOpenMenu} />
    </>
  )
}

export default HeaderContent
