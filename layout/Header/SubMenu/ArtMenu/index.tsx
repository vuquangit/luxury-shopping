import { FC, useState } from 'react'
import ChooseArtItem from './ChooseArtItem'
import OpenArtItem from './OpenArtItem'

const ArtMenu: FC = () => {
  const data = [
    {
      label: 'Trunks and Travel',
      dataItem: [
        'Trunks and Boxes',
        'Rolling Luggage',
        'Softsided Luggage and Duffle Bags',
        'Travel Accessories and Organisers',
      ],
    },
    {
      label: 'Tech Accessories',
      dataItem: ['Connected Objects', 'Phone Holders and Cases'],
    },
    {
      label: 'Games and Collectables',
      dataItem: ['Games', 'Sporting Goods', 'Collector Items'],
    },
    {
      label: 'Home',
      dataItem: [
        'Objets Nomades – The Story',
        'Objets Nomades – The Collection',
        'BY STYLE',
        'Furniture',
        'Decor',
        'Blankets and Throws',
        'Candles',
      ],
    },
    {
      label: 'Books and Writing',
      dataItem: [
        'Hard Cover Books',
        'City Guides and Travel Books',
        'Notebooks and Agendas',
        'Pencils and Pouches',
      ],
    },
  ]
  const [choose, setChoose] = useState('Trunks and Travel')
  const handleChooseItem = (data: any) => {
    setChoose(data)
  }
  return (
    <>
      <div className="art-detail">
        <div className="art-detail__product">
          <div className="art-detail__product--container">
            <ChooseArtItem handleChooseItem={handleChooseItem} data={data} />
          </div>
        </div>
        <div className="art-detail__product-detail">
          <div className="art-detail__product-detail--container">
            <OpenArtItem flagChoose={choose} data={data} />
          </div>
        </div>
        <div className="art-detail__img">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={`/image/art/${choose}.jpg`} alt="art" />
          </a>
        </div>
      </div>
    </>
  )
}

export default ArtMenu
