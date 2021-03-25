import React, { useState, useEffect, FC } from 'react'
import { debounce } from 'lodash'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { IAccordionState } from '.'

type Props = {
  activeTab: number
  index: number
  panelId: number
  activateTab: () => void
  handleSelectFilter: (titleId: number, contentId: number) => void
} & IAccordionState

const AccordionPanel: FC<Props> = (props) => {
  const {
    title,
    contents,
    activeTab,
    index,
    panelId,
    activateTab,
    handleSelectFilter,
  } = props

  const [height, setHeight] = useState(0)

  const isActive = activeTab === index
  const innerStyle = {
    height: `${isActive ? height : 0}px`,
  }

  const getHeightAccordionContent = () => {
    const height = document.querySelector('.panel__inner')?.scrollHeight
    height && setHeight(height)
  }

  const handleAccordionTitle = () => {
    activateTab()
    getHeightAccordionContent()
  }

  useEffect(() => {
    window.addEventListener('resize', debounce(getHeightAccordionContent, 250))

    return () => {
      window.removeEventListener('resize', getHeightAccordionContent)
    }
  }, [])

  const contentItemStyle = (selected: boolean) =>
    classnames('btn button-trigger', { '--selected': selected })

  const contentRender = contents.map((item) => (
    <div key={item.id} className="panel__content--item">
      <button
        className={contentItemStyle(item.selected)}
        onClick={() => handleSelectFilter(panelId, item.id)}
      >
        {item.text}
        {item.selected && (
          <FontAwesomeIcon icon={faTimes} className="filter-close-icon" />
        )}
      </button>
    </div>
  ))

  return (
    <div className="panel" role="tabpanel" aria-expanded={isActive}>
      <button
        className="panel__label"
        role="tab"
        onClick={handleAccordionTitle}
      >
        {title}
      </button>
      <div className="panel__inner" style={innerStyle} aria-hidden={!isActive}>
        <div className="panel__content">{contentRender}</div>
      </div>
    </div>
  )
}

export default AccordionPanel
