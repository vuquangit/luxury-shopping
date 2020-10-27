import { FC, useState } from 'react'
import ChooseWomenItem from './ChooseWomenItem'
import OpenWomenItem from './OpenWomenItem'

const WomenMenu: FC = () => {
  const [choose, setChoose] = useState('Gifts for Women')
  const handleChooseItem = (data: string) => {
    setChoose(data)
  }
  return (
    <>
      <div className="women-detail">
        <div className="women-detail__product">
          <div className="women-detail__product--container">
            <ChooseWomenItem handleChooseItem={handleChooseItem} />
            {/* <p>Gifts for Women</p>
            <p>Highlights</p>
            <p>Handbags</p>
            <p>Wallets and Small Leather Goods</p>
            <p>Fragrances</p>
            <p>Ready-to-Wear</p>
            <p>Accessories</p>
            <p>Shoes</p>
            <p>Jewellery</p>
            <p>Watches</p>
            <p>Travel</p>
            <p>Fashion Shows</p>
            <p>Personalisation</p> */}
          </div>
        </div>
        <div className="women-detail__product-detail">
          <div className="women-detail__product-detail--container">
            <OpenWomenItem flagChoose={choose} />
            {/* <p>Christmas Gifts for Her</p>
            <p>The Essentials</p>
            <p>Personalisation</p> */}
          </div>
        </div>
        <div className="women-detail__img">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="/image/women-img.jpg" alt="women" />
          </a>
        </div>
      </div>
    </>
  )
}

export default WomenMenu
