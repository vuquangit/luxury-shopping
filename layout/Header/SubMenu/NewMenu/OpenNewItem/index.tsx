import { FC } from 'react'
type Props = {
  flagChoose: string
  data: any
}
const index: FC<Props> = ({ flagChoose, data }) => {
  const _getData = () => {
    const newData = data.filter((item: any) => item.label === flagChoose)
    return newData[0].dataItem
  }
  return (
    <>
      {_getData().map((item: any) => (
        <p key={item}>{item}</p>
      ))}
    </>
  )
}

export default index
