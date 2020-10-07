import { FC } from 'react'
import Loadable from 'react-loadable'
// import ProductItemImage from './ProductItemImage'
import ProductItemContent from './ProductItemContent'
import Loading from './ProductItemImageLoading'

type Props = {
  id: number
  image: string
  title: string
  link: string
  subtitle?: string
  content_link?: string
  aspectRatio?: [number, number]
}

const ProductItem: FC<Props> = ({
  image,
  link,
  title,
  subtitle,
  content_link,
  aspectRatio = [1, 1],
}) => {
  const LoadableComponent = Loadable({
    loader: () => import('./ProductItemImage'),
    loading: Loading,
  })

  return (
    <a href={link} className="home-product">
      <LoadableComponent
        image={image}
        aspectRatio={aspectRatio}
        isBackgroundImage
      />
      <ProductItemContent
        title={title}
        subtitle={subtitle}
        content_link={content_link}
      />
    </a>
  )
}

export default ProductItem
