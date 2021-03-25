import React, { useState, FC } from 'react'
import AccordionPanel from './AccordionPanel'

interface IContents {
  id: number
  text: string
  selected: boolean
}

export interface IAccordionState {
  id: number
  title: string
  contents: IContents[]
}

type Props = {
  items: IAccordionState[]
  handleSelectFilter: (titleId: number, contentId: number) => void
}

const Accordion: FC<Props> = ({ items = [], handleSelectFilter }) => {
  const [activeTab, setActiveTab] = useState(-1)

  const handleActivateTab = (index: number) => {
    setActiveTab((prev) => (prev === index ? -1 : index))
  }

  return (
    <div className="accordion" role="tablist">
      {items.map((item: IAccordionState, index: number) => (
        <AccordionPanel
          key={item.id}
          activeTab={activeTab}
          index={index}
          panelId={item.id}
          handleSelectFilter={handleSelectFilter}
          {...item}
          activateTab={() => handleActivateTab(index)}
        />
      ))}
    </div>
  )
}

export default Accordion
