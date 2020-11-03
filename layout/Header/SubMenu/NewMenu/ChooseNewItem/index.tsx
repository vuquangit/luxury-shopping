import { FC } from 'react'
type Props = {
  handleChooseItem: (data: any) => void
  data: any
}
const index: FC<Props> = ({ handleChooseItem, data }) => {
  const handleOnClick = (item: any) => {
    handleChooseItem(item.label)
  }
  return (
    <>
      {data.map((item: any) => (
        <p onClick={() => handleOnClick(item)} key={item.id}>
          {item.label}
        </p>
      ))}
    </>
  )
}

export default index
