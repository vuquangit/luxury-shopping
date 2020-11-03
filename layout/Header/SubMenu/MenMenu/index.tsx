import { FC, useState } from 'react'
import ChooseMenItem from './ChooseMenItem'
import OpenMenItem from './OpenMenItem'

const MenMenu: FC = () => {
  const data = [
    {
      label: 'Gifts for Men',
      dataItem: [
        'Christmas Gifts for Him',
        'The Essentials',
        'Personalisation',
      ],
      id: 1,
    },
    {
      label: 'Highlights',
      dataItem: [
        'Damier Graphite Giant',
        'Fall-Winter 2020 Show',
        'LV² Collection',
        'Monogram Eclipse Reverse',
      ],
      id: 2,
    },
    {
      label: 'Bags',
      dataItem: [
        'Taigarama Collection',
        'BY STYLE',
        'All Bags',
        'Backpacks',
        'Messenger and Crossbody Bags',
        'Business Bags',
        'Tote Bags',
        'Small Bags and Belt Bags',
        'Exotic Leather Bags',
      ],
      id: 3,
    },
    {
      label: 'Wallets and Small Leather Goods',
      dataItem: [
        'Taigarama Collection',
        'BY STYLE',
        'All Wallets and Small Leather Goods',
        'Long Wallets',
        'Compact Wallets',
        'Card Holders and Passport Covers',
        'Phone Cases',
        'Belted and Chain Wallets',
        'Pouches',
        'Exotic Leather Wallets',
      ],
      id: 4,
    },
    {
      label: 'Fragrances',
      dataItem: [
        'Men’s Fragrances',
        'Experience Cologne Perfumes',
        'Experience Oriental Perfumes',
        'Discover the Candle Collection',
        'BY STYLE',
        'All Fragrances',
        'Travel',
        'Candles',
        'Personalisation',
      ],
      id: 5,
    },
    {
      label: 'Ready-to-Wear',
      dataItem: [
        'View by Look',
        'Louis Vuitton Staples Edition',
        'Leather Collection',
        'Denim Collection',
        'BY STYLE',
        'All Ready-to-Wear',
        'Outerwear and Coats',
        'Blazers and Jackets',
        'Shirts',
        'T-Shirts and Polos',
        'Knitwear and Sweatshirts',
        'Trousers',
        'Swimwear',
      ],
      id: 6,
    },
    {
      label: 'Accessories',
      dataItem: [
        'New This Season',
        'BY STYLE',
        'Belts',
        'Tech Accessories',
        'Scarves',
        'Hats and Gloves',
        'Ties and Pocket Squares',
        'Fashion Jewellery',
        'Sunglasses',
        'Key Holders and Bag Charms',
      ],
      id: 7,
    },
    {
      label: 'Shoes',
      dataItem: [
        'LV Trainers',
        'BY STYLE',
        'All Shoes',
        'Trainers',
        'Boots',
        'Loafers and Moccasins',
        'Lace-Ups and Buckle Shoes',
        'Sandals',
      ],
      id: 8,
    },
    {
      label: 'Watches and Jewellery',
      dataItem: [
        'LV Volt Collection',
        'Tambour Moon Dual Time',
        'Louis Vuitton for Unicef',
        'BY STYLE',
        'All Watches and Accessories',
        'Watches',
        'Connected Watches',
        'Watch Straps and Accessories',
        'Jewellery',
      ],
      id: 9,
    },
    {
      label: 'Travel',
      dataItem: [
        'Horizon Soft',
        'BY STYLE',
        'All Luggage and Accessories',
        'Rolling Luggage',
        'Softsided Luggage and Duffle Bags',
        'Travel Accessories and Organisers',
      ],
      id: 10,
    },
    {
      label: 'Fashion Shows',
      dataItem: [
        'Fashion Show Selection',
        'Spring-Summer 2021 Show in Tokyo',
        'Spring-Summer 2021 Show in Shanghai',
        'Virgil Abloh',
        'Endless Runner Game',
      ],
      id: 11,
    },
    {
      label: 'Personalisation',
      dataItem: [
        'Bags & Travel',
        'Small Leather Goods',
        'Ready-to-Wear',
        'Belts',
        'Timepieces',
        'Trainers',
      ],
      id: 12,
    },
  ]
  const [choose, setChoose] = useState('Gifts for Men')
  const handleChooseItem = (data: string) => {
    setChoose(data)
  }
  return (
    <>
      <div className="men-detail">
        <div className="men-detail__product">
          <div className="men-detail__product--container">
            <ChooseMenItem handleChooseItem={handleChooseItem} data={data} />
          </div>
        </div>
        <div className="men-detail__product-detail">
          <div className="men-detail__product-detail--container">
            <OpenMenItem flagChoose={choose} data={data} />
          </div>
        </div>
        <div className="men-detail__img">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={`/image/men/${choose}.jpg`} alt="men" />
          </a>
        </div>
      </div>
    </>
  )
}

export default MenMenu
