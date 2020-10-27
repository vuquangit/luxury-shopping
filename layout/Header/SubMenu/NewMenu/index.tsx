import { FC, useState } from 'react'
import OpenNewItem from './OpenNewItem'
import ChooseNewItem from './ChooseNewItem'

const NewMenu: FC = () => {
  const [choose, setChoose] = useState('For Women')
  const handleChooseItem = (data: string) => {
    setChoose(data)
  }
  return (
    <>
      <div className="new-detail">
        <div className="new-detail__for-sex">
          <div className="new-detail__for-sex--container">
            <ChooseNewItem handleChooseItem={handleChooseItem} />
          </div>
        </div>
        <div className="new-detail__sex-detail">
          <div className="new-detail__sex-detail--container">
            <OpenNewItem flagChoose={choose} />
          </div>
        </div>
        <div className="new-detail__img">
          {/* <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="/image/new-img.jpg" alt="new"/>
        </a> */}
        </div>
      </div>
    </>
  )
}

export default NewMenu
