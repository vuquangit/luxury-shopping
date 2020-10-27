import { FC } from 'react'
type Props = {
  flagChoose: string
}
const index: FC<Props> = ({ flagChoose }) => {
  const data = [
    {
      label: 'For Women',
      dataItem: [
        'The Latest',
        'Since 1854 Collection',
        'LV Crafty Collection',
        'LV Pont 9',
      ],
    },
    {
      label: 'For Men',
      dataItem: [
        'The Latest',
        'Damier Graphite Giant',
        'Fall-Winter 2020 Show',
        'LV² Collection',
        'Monogram Eclipse Reverse',
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
