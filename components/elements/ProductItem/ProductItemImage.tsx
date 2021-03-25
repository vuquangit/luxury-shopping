import { FC } from 'react'
import LazyImage from 'components/elements/LazyImage'

type Props = {
  image: string
  aspectRatio?: [number, number]
  isBackgroundImage?: boolean
}

const ProductItemImage: FC<Props> = ({
  image,
  aspectRatio = [1, 1],
  isBackgroundImage = false,
}) => (
  <>
    {image && (
      <LazyImage
        src={image}
        aspectRatio={aspectRatio}
        isBackgroundImage={isBackgroundImage}
        className={'home-product__image'}
      />
    )}
  </>
)

export default ProductItemImage
