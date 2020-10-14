import { FC, useEffect, useState, useCallback } from 'react'
import { debounce } from 'lodash'
import ProductItem from 'components/elements/ProductItem'
import newProductData from './newProduct.json'

const NewProducts: FC = () => {
  const [aspectRatios, setAspectRatios] = useState<
    [[number, number], [number, number], [number, number]]
  >([
    [10, 5],
    [10, 5],
    [10, 5],
  ])

  const handleWindowResize = useCallback(() => {
    if (window.innerWidth > 992) {
      setAspectRatios([
        [10, 12.5],
        [10, 5],
        [16, 9],
      ])
    } else {
      setAspectRatios([
        [10, 5],
        [10, 5],
        [10, 5],
      ])
    }
  }, [])

  useEffect(() => {
    handleWindowResize()
    window.addEventListener(
      'resize',
      debounce(() => handleWindowResize(), 250)
    )

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [handleWindowResize])

  return (
    <div className="homepage-new">
      <ProductItem {...newProductData[0]} aspectRatio={aspectRatios[0]} />
      <div>
        <ProductItem {...newProductData[1]} aspectRatio={aspectRatios[1]} />
        <ProductItem {...newProductData[2]} aspectRatio={aspectRatios[2]} />
      </div>
    </div>
  )
}

export default NewProducts
