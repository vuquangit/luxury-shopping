import { FC, useState } from 'react'
import classnames from 'classnames'
import CheckboxOn from './CheckboxOn.svg'
import CheckboxOff from './CheckboxOff.svg'
import FilterIcon from './Filter.svg'

type Props = {
  isOpenFilter: boolean
  handleToggleOpenFilter: () => any
}
const CategoryActions: FC<Props> = ({
  isOpenFilter,
  handleToggleOpenFilter,
}) => {
  const [isAvailOnline, setIsAvailOnline] = useState(false)

  const btnFilterStyle = classnames('btn-filters', {
    'btn-filters-open': isOpenFilter,
  })

  return (
    <div className="category-actions">
      <button
        role="link"
        className="category-actions__btn-avail-online"
        aria-label="Only display the items available for purchase online"
        onClick={() => setIsAvailOnline(!isAvailOnline)}
      >
        {isAvailOnline ? <CheckboxOn /> : <CheckboxOff />}
        <span>Available Online</span>
      </button>

      <div className="category-actions__expandable-panel">
        <button className={btnFilterStyle} onClick={handleToggleOpenFilter}>
          <FilterIcon />
          <span>Filters</span>
        </button>
      </div>
    </div>
  )
}

export default CategoryActions
