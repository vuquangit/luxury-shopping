import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

// type Props = {
//   aspectRatio?: [number, number]
// }

const ProductItemImageLoading: FC = () => {
  // eslint-disable-next-line no-console
  console.log('loading....')

  const aspectRatio = [10, 10]

  const paddingTop = `${(aspectRatio[1] / aspectRatio[0]) * 100}%`

  return (
    <div className="image-loading" style={{ paddingTop }}>
      <div className="image-loading__content">
        <FontAwesomeIcon
          icon={faSpinner}
          className="image-loading__content--icon"
        />
      </div>
    </div>
  )
}

export default ProductItemImageLoading
