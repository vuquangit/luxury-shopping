import { FC } from 'react'
type Props = {
  handleChooseItem: (data: any) => void
}
const index: FC<Props> = ({ handleChooseItem }) => {
  const data = [
    { label: 'Gifts for Women', id: 1 },
    { label: 'Highlights', id: 2 },
    { label: 'Handbags', id: 3 },
    { label: 'Wallets and Small Leather Goods', id: 4 },
    { label: 'Fragrances', id: 5 },
    { label: 'Ready-to-Wear', id: 6 },
    { label: 'Accessories', id: 7 },
    { label: 'Shoes', id: 8 },
    { label: 'Jewellery', id: 9 },
    { label: 'Watches', id: 10 },
    { label: 'Travel', id: 11 },
    { label: 'Fashion Shows', id: 12 },
    { label: 'Personalisation', id: 13 },
  ]
  const handleOnClick = (item: any) => {
    handleChooseItem(item.label)
  }
  return (
    <>
      {data.map((item) => (
        <p onClick={() => handleOnClick(item)} key={item.id}>
          {item.label}
        </p>
      ))}
    </>
  )
}

export default index
