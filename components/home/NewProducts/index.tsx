import { FC, useEffect, useState } from 'react'
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

  const [windowWidth, setWindowWidth] = useState<number>(0)
  useEffect(() => {
    const debouncedHandleResize = debounce(
      () => setWindowWidth(window.innerWidth),
      250
    )

    window.addEventListener('resize', debouncedHandleResize)

    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [])

  useEffect(() => {
    if (windowWidth > 992) {
      setAspectRatios([
        [10, 12.5],
        [10, 5],
        [10, 5],
      ])
    }
  }, [windowWidth])

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
