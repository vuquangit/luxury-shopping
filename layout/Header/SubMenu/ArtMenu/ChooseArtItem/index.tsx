import { FC } from 'react'
type Props = {
  handleChooseItem: FC
}
const index: FC<Props> = ({ handleChooseItem }) => {
  const data = [
    { label: 'Trunks and Travel', id: 1 },
    { label: 'Tech Accessories', id: 2 },
    { label: 'Games and Collectables', id: 3 },
    { label: 'Home', id: 4 },
    { label: 'Books and Writing', id: 5 },
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
