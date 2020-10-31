import { FC } from 'react'
type Props = {
  flagChoose: string
}
const index: FC<Props> = ({ flagChoose }) => {
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
