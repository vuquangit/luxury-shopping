import React, { FC } from 'react'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import Accordion, { IAccordionState } from 'components/elements/Accordion'

type Props = {
  isOpenFilter: boolean
  filterList: IAccordionState[]
  handleSelectFilter: (titleId: number, contentId: number) => void
}

const CategoryExpandablePanel: FC<Props> = ({
  isOpenFilter,
  filterList,
  handleSelectFilter,
}) => {
  const expandablePanelStyle = classnames('expandable-panel-content', {
    'expandable-panel-content-open': isOpenFilter,
  })

  return (
    <div className={expandablePanelStyle}>
      <Accordion items={filterList} handleSelectFilter={handleSelectFilter} />
      <button className="btn-expand">
        <FontAwesomeIcon icon={faChevronUp} className="btn-expand__icon" />
        <span> Hide filter</span>
      </button>
    </div>
  )
}

export default CategoryExpandablePanel
