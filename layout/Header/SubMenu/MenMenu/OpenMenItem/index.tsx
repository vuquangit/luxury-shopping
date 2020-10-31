import { FC } from 'react'
type Props = {
  flagChoose: string
}
const index: FC<Props> = ({ flagChoose }) => {
  const data = [
    {
      label: 'Gifts for Men',
      dataItem: [
        'Christmas Gifts for Him',
        'The Essentials',
        'Personalisation',
      ],
    },
    {
      label: 'Highlights',
      dataItem: [
        'Damier Graphite Giant',
        'Fall-Winter 2020 Show',
        'LV² Collection',
        'Monogram Eclipse Reverse',
      ],
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
    },
  ]
  const _getData = () => {
    const newData = data.filter((item) => item.label === flagChoose)
    return newData[0].dataItem
  }
  return (
    <>
      {_getData().map((item) => (
        <p key={item}>{item}</p>
      ))}
    </>
  )
}

export default index
