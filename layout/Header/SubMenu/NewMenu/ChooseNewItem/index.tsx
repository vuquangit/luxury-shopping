import { FC } from 'react'
type Props = {
  handleChooseItem: (data: any) => void
}
const index: FC<Props> = ({ handleChooseItem }) => {
  const data = [
    { label: 'For Women', id: 1 },
    { label: 'For Men', id: 2 },
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
