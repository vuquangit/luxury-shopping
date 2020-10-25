import React, { FC } from 'react'

type Props = {
  categoryTitle: string
  categoryCount: number
}

const CategoryTitle: FC<Props> = ({ categoryTitle, categoryCount }) => {
  return (
    <div className="category-title">
      <h1 className="category-title__name">{categoryTitle}</h1>
      <span className="category-title__count">
        ({categoryCount} <span>Product{categoryCount > 1 && 's'})</span>
      </span>
    </div>
  )
}

export default CategoryTitle
