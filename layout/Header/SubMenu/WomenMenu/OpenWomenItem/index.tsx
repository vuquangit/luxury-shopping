import { FC } from 'react'
type Props = {
  flagChoose: string
}
const index: FC<Props> = ({ flagChoose }) => {
  const data = [
    {
      label: 'Gifts for Women',
      dataItem: [
        'Christmas Gifts for Her',
        'The Essentials',
        'Personalisation',
      ],
    },
    {
      label: 'Highlights',
      dataItem: [
        'The Since 1854 Collection',
        'LV Crafty Collection',
        'LV Pont 9',
      ],
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
        'Spring-Summer 2021 Show',
        'Fall-Winter 2020 Show',
        'Fashion Show Selection',
        'Nicolas Ghesquière',
      ],
    },
    {
      label: 'Personalisation',
      dataItem: [
        'Handbags & Travel',
        'Small Leather Goods',
        'Timepieces',
        'Fragrances',
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
        <p key={item.id}>{item}</p>
      ))}
    </>
  )
}

export default index
