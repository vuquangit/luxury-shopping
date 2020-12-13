import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchRes: FC = () => {
  return (
    <div className="searchRes-box">
      <div className="searchRes-box__icon">
        <FontAwesomeIcon icon={faSearch} style={{ height: '1.2rem' }} />
      </div>
      <input type="text" placeholder="Product, Store..." />
    </div>
  )
}

export default SearchRes
