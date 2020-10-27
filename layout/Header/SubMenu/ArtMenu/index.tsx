import { FC, useState } from 'react'
import ChooseArtItem from './ChooseArtItem'
import OpenArtItem from './OpenArtItem'

const ArtMenu: FC = () => {
  const [choose, setChoose] = useState('Trunks and Travel')
  const handleChooseItem = (data: string) => {
    setChoose(data)
  }
  return (
    <>
      <div className="art-detail">
        <div className="art-detail__product">
          <div className="art-detail__product--container">
            <ChooseArtItem handleChooseItem={handleChooseItem} />
          </div>
        </div>
        <div className="art-detail__product-detail">
          <div className="art-detail__product-detail--container">
            <OpenArtItem flagChoose={choose} />
          </div>
        </div>
        <div className="art-detail__img">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="/image/art-img.jpg" alt="art" />
          </a>
        </div>
      </div>
    </>
  )
}

export default ArtMenu
