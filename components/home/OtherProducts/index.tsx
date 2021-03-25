import { FC } from 'react'
import ProductItem from 'components/elements/ProductItem'
import otherProductData from './otherProduct.json'

const OtherProducts: FC = () => {
  const renderProductItem = otherProductData.map((item) => (
    <ProductItem {...item} aspectRatio={[10, 5]} key={item.id} />
  ))
  return <div className="homepage-other">{renderProductItem}</div>
}

export default OtherProducts
