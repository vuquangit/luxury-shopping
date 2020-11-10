import { FC } from 'react'
import ContentNav from './ContentNav'
import SearchInput from './SearchInput'
type Props = {
  handleOpenMenu: (data: 'men' | 'women' | 'input') => void
}

const HeaderContent: FC<Props> = ({ handleOpenMenu }) => {
  return (
    <>
      <ContentNav handleOpenMenu={handleOpenMenu} />
      <SearchInput handleOpenMenu={handleOpenMenu} />
    </>
  )
}

export default HeaderContent
