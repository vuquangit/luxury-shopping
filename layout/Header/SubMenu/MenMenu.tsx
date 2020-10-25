import { FC } from 'react'

const MenMenu: FC = () => {
  return (
    <>
      <div className="men-detail">
        <div className="men-detail__product">
          <div className="men-detail__product--container">
            <p>Gifts for Men</p>
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
            <p>Personalisation</p>
          </div>
        </div>
        <div className="men-detail__product-detail">
          <div className="men-detail__product-detail--container">
            <p>Christmas Gifts for Her</p>
            <p>The Essentials</p>
            <p>Personalisation</p>
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
