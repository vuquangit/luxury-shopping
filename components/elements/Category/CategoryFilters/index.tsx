import { FC, useState } from 'react'
import CategoryActions from './CategoryActions'
import CategoryTitle from './CategoryTitle'
import CategoryExpandablePanel from './CategoryExpandablePanel'
import filterListData from './mock.json'
import { set, findIndex } from 'lodash'

type Props = {
  categoryTitle: string
  categoryCount: number
}

interface IContents {
  id: number
  text: string
  selected: boolean
}

interface IFilterList {
  id: number
  title: string
  contents: IContents[]
}

interface IFilterListData {
  id: number
  title: string
  contents: string[]
}

const CategoryFilter: FC<Props> = ({
  categoryTitle,
  categoryCount,
  ...restProps
}) => {
  const [isOpenFilter, setIsOpenFilter] = useState(false)
  const handleToggleOpenFilter = () => setIsOpenFilter(!isOpenFilter)

  const [filterList, setFilterList] = useState<IFilterList[]>(() =>
    filterListData.map((item: IFilterListData) => {
      const _contents = item.contents.map((content: string, index: number) => ({
        id: index + 1,
        text: content,
        selected: false,
      }))

      return {
        ...item,
        contents: _contents,
      }
    })
  )

  const handleSelectFilter = (titleId: number, contentId: number) => {
    const titleIndex = findIndex(filterList, { id: titleId })
    const contentIndex = findIndex(filterList[titleIndex].contents, {
      id: contentId,
    })

    setFilterList((prev) =>
      prev.map((item) =>
        item.id == titleId && item.contents.find((e) => e.id === contentId)
          ? set(
              item,
              ['contents', contentIndex, 'selected'],
              !item.contents[contentIndex].selected
            )
          : item
      )
    )
  }

  return (
    <div className="category__filter">
      <div className="category__filter--wrap">
        <CategoryTitle
          categoryTitle={categoryTitle}
          categoryCount={categoryCount}
        />
        <CategoryActions
          isOpenFilter={isOpenFilter}
          handleToggleOpenFilter={handleToggleOpenFilter}
          {...restProps}
        />
        <CategoryExpandablePanel
          filterList={filterList}
          isOpenFilter={isOpenFilter}
          handleSelectFilter={handleSelectFilter}
        />
      </div>
    </div>
  )
}

export default CategoryFilter
