import { FC, useState } from 'react'
import ChooseMenItem from './ChooseMenItem'
import OpenMenItem from './OpenMenItem'

const MenMenu: FC = () => {
  const [choose, setChoose] = useState('Gifts for Men')
  const handleChooseItem = (data: string) => {
    setChoose(data)
  }
  return (
    <>
      <div className="men-detail">
        <div className="men-detail__product">
          <div className="men-detail__product--container">
            <ChooseMenItem handleChooseItem={handleChooseItem} />
          </div>
        </div>
        <div className="men-detail__product-detail">
          <div className="men-detail__product-detail--container">
            <OpenMenItem flagChoose={choose} />
          </div>
        </div>
        <div className="men-detail__img">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="/image/men-img.jpg" alt="men" />
          </a>
        </div>
      </div>
    </>
  )
}

export default MenMenu
