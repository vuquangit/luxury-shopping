import { FC, useState } from 'react'
import ChooseWomenItem from './ChooseWomenItem'
import OpenWomenItem from './OpenWomenItem'

const WomenMenu: FC = () => {
  const data = [
    {
      label: 'Gifts for Women',
      dataItem: [
        'Christmas Gifts for Her',
        'The Essentials',
        'Personalisation',
      ],
      id: 1,
    },
    {
      label: 'Highlights',
      dataItem: [
        'The Since 1854 Collection',
        'LV Crafty Collection',
        'LV Pont 9',
      ],
      id: 2,
    },
    {
      label: 'Handbags',
      dataItem: [
        'Iconic Monogram Bags',
        'Capucines',
        'Twist',
        'Petite Malle',
        'Dauphine',
      ],
      id: 3,
    },
    {
      label: 'Wallets and Small Leather Goods',
      dataItem: [
        'All Wallets and Small Leather Goods',
        'Long Wallets',
        'Compact Wallets',
        'Chain and Strap Wallets',
        'Pouches',
        'Card Holders',
        'Phone Cases',
        'Shoulder Straps',
        'Exotic Leather Wallets',
      ],
      id: 4,
    },
    {
      label: 'Fragrances',
      dataItem: [
        'Discover the Campaign',
        'Experience Cologne Perfumes',
        'Experience Oriental Perfumes',
        'Explore Scents for Home',
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
        'Must-Haves and Essentials',
        'Denim Collection',
        'Leather Collection',
        'BY STYLE',
        'All Ready-to-Wear',
        'Coats and Jackets',
        'Dresses',
        'Tops',
        'Knitwear',
        'Trousers',
        'Skirts and Shorts',
        'Swimwear',
      ],
      id: 6,
    },
    {
      label: 'Accessories',
      dataItem: [
        'New This Season',
        'How To Wear Textiles',
        'Be Mindful Collection',
        'BY STYLE',
        'Silk Squares and Bandeaus',
        'Scarves and Shawls',
        'Hats and Gloves',
        'Fashion Jewellery',
        'Belts',
        'Sunglasses',
        'Key Holders and Bag Charms',
        'Tech Accessories',
      ],
      id: 7,
    },
    {
      label: 'Shoes',
      dataItem: [
        'Autumn Selection',
        'LV Archlight',
        'Rain Collection',
        'BY STYLE',
        'All Shoes',
        'Mules and Slides',
        'Pumps',
        'Trainers',
        'Loafers and Ballerinas',
        'Sandals',
        'Slippers',
        'Boots and Ankle Boots',
      ],
      id: 8,
    },
    {
      label: 'Jewellery',
      dataItem: [
        'LV Volt Collection',
        'Louis Vuitton for Unicef',
        'B Blossom Collection',
        'Idylle Blossom Collection',
        'High Jewellery',
        'BY STYLE',
        'All Fine Jewellery',
        'Rings',
        'Earrings',
        'Necklaces and Pendants',
        'Bracelets',
      ],
      id: 9,
    },
    {
      label: 'Watches',
      dataItem: [
        'Tambour Moon Dual Time',
        'BY STYLE',
        'All Watches and Accessories',
        'Watches',
        'Connected Watches',
        'Watch Straps and Accessories',
      ],
      id: 10,
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
      id: 11,
    },
    {
      label: 'Fashion Shows',
      dataItem: [
        'Spring-Summer 2021 Show',
        'Fall-Winter 2020 Show',
        'Fashion Show Selection',
        'Nicolas Ghesquière',
      ],
      id: 12,
    },
    {
      label: 'Personalisation',
      dataItem: [
        'Handbags & Travel',
        'Small Leather Goods',
        'Timepieces',
        'Fragrances',
      ],
      id: 13,
    },
  ]
  const [choose, setChoose] = useState('Gifts for Women')
  const handleChooseItem = (data: string) => {
    setChoose(data)
  }
  return (
    <>
      <div className="women-detail">
        <div className="women-detail__product">
          <div className="women-detail__product--container">
            <ChooseWomenItem handleChooseItem={handleChooseItem} data={data} />
          </div>
        </div>
        <div className="women-detail__product-detail">
          <div className="women-detail__product-detail--container">
            <OpenWomenItem flagChoose={choose} data={data} />
          </div>
        </div>
        <div className="women-detail__img">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={`/image/women/${choose}.jpg`} alt="women" />
          </a>
        </div>
      </div>
    </>
  )
}

export default WomenMenu
