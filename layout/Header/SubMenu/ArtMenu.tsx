import { FC } from 'react'

const ArtMenu: FC = () => {
  return (
    <>
      <div className="art-detail">
        <div className="art-detail__product">
          <div className="art-detail__product--container">
            <p>Trunks and Travel</p>
            <p>Tech Accessories</p>
            <p>Games and Collectables</p>
            <p>Home</p>
            <p>Books and Writing</p>
          </div>
        </div>
        <div className="art-detail__product-detail">
          <div className="art-detail__product-detail--container">
            <p>Trunks and Boxes</p>
            <p>Rolling Luggage</p>
            <p>Softsided Luggage and Duffle Bags</p>
            <p>Travel Accessories and Organisers</p>
          </div>
        </div>
        <div className="art-detail__img">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="/image/art-img.jpg" alt="art" />
          </a>
        </div>
      </div>
    </>
  )
}

export default ArtMenu
