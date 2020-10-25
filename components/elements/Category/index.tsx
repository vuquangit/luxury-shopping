import { FC } from 'react'
import CategoryFilter from './CategoryFilters'
import CategoryGrid from './CategoryGrid'

const Category: FC = () => {
  const categoryData = {
    tile: 'New This Season ',
    count: 50,
  }

  return (
    <div className="category">
      <CategoryFilter
        categoryTitle={categoryData.tile}
        categoryCount={categoryData.count}
      />
      <CategoryGrid />
    </div>
  )
}

export default Category
