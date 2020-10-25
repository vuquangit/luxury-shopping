import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
type Props = {
  handleOpenMenu: (data: string) => void //arrowFunc return nothing
}

const ContentInput: FC<Props> = ({ handleOpenMenu }) => {
  const handleOnclick = () => {
    const data = 'input'
    handleOpenMenu(data)
  }
  return (
    <div className="nav-header__search-box">
      <div className="nav-header__search-box--icon">
        <FontAwesomeIcon icon={faSearch} style={{ height: '1.2rem' }} />
      </div>
      <div className="nav-header__search-box--input">
        <input
          onClick={handleOnclick}
          type="text"
          placeholder="Product, Store..."
        />
      </div>
    </div>
  )
}

export default ContentInput
