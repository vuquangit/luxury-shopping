import { FC } from 'react'

const NewMenu: FC = () => {
  return (
    <>
      <div className="new-detail">
        <div className="new-detail__for-sex">
          <div className="new-detail__for-sex--container">
            <p>For Women</p>
            <p>For Men</p>
          </div>
        </div>
        <div className="new-detail__sex-detail">
          <div className="new-detail__sex-detail--container">
            <p>The Latest</p>
            <p>Since 1854 Collection</p>
            <p>LV Crafty Collection</p>
            <p>LV Pont 9</p>
          </div>
        </div>
        <div className="new-detail__img">
          {/* <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="/image/new-img.jpg" alt="new"/>
        </a> */}
        </div>
      </div>
    </>
  )
}

export default NewMenu
