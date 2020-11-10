import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
type Props = {
  handleOpenMenu: (data: 'men' | 'women' | 'input') => void //arrowFunc return nothing
}

const SearchInput: FC<Props> = ({ handleOpenMenu }) => {
  const handleOnclick = () => {
    const data = 'input'
    handleOpenMenu(data)
  }
  return (
    <div className="search-box">
      <div className="search-box__search-icon">
        <FontAwesomeIcon icon={faSearch} style={{ height: '1.2rem' }} />
      </div>
      <div className="search-box__input-container">
        <input
          className="search-box__input-container--search-input"
          onClick={handleOnclick}
          type="text"
          placeholder="Product, Store..."
        />
      </div>
    </div>
  )
}

export default SearchInput
