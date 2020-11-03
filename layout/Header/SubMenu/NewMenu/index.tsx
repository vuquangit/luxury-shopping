import { FC, useState } from 'react'
import OpenNewItem from './OpenNewItem'
import ChooseNewItem from './ChooseNewItem'

// export interface IData{
//     label:string,
//     dataItem:Array<string>,
//     id:number,
// }

const NewMenu: FC = () => {
  const data = [
    {
      label: 'For Women',
      dataItem: [
        'The Latest',
        'Since 1854 Collection',
        'LV Crafty Collection',
        'LV Pont 9',
      ],
      id: 1,
    },
    {
      label: 'For Men',
      dataItem: [
        'The Latest',
        'Damier Graphite Giant',
        'Fall-Winter 2020 Show',
        'LV² Collection',
        'Monogram Eclipse Reverse',
      ],
      id: 2,
    },
  ]
  const [choose, setChoose] = useState('For Women')
  const handleChooseItem = (data: string) => {
    setChoose(data)
  }
  return (
    <>
      <div className="new-detail">
        <div className="new-detail__for-sex">
          <div className="new-detail__for-sex--container">
            <ChooseNewItem handleChooseItem={handleChooseItem} data={data} />
          </div>
        </div>

        <div className="new-detail__sex-detail">
          <div className="new-detail__sex-detail--container">
            <OpenNewItem flagChoose={choose} data={data} />
          </div>
        </div>

        <div className="new-detail__img">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={`/image/new/${choose}.jpg`} alt="new" />
          </a>
        </div>
      </div>
    </>
  )
}

export default NewMenu
