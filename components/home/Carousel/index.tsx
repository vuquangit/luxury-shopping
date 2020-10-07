import { FC, useRef, useState, useMemo } from 'react'
import Slider from 'react-slick'

import SliderItem from './SliderItem'
import SliderConfig from './SliderConfigs'
import sliderData from './sliderData.json'
import SliderNext from './SliderNext'
import SliderPrevious from './SliderPrevious'
import ProductItemContent from 'components/elements/ProductItem/ProductItemContent'

interface ISliderData {
  id: number
  image: string
  title: string
  link: string
  content_link: string
}

const CarouselSection: FC = () => {
  const sliderEl = useRef(null)
  const [currentId, setCurrentId] = useState(0)

  const sliderNext = (event: any) => {
    event.preventDefault()
    event.stopPropagation()

    if (sliderEl && sliderEl.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Object is possibly 'null'.
      sliderEl.current.slickNext()
    }
  }

  const sliderPrevious = (event: any) => {
    event.preventDefault()
    event.stopPropagation()

    if (sliderEl && sliderEl.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Object is possibly 'null'.
      sliderEl.current.slickPrev()
    }
  }

  const afterChange = (index: number) => setCurrentId(index)

  const renderSliderItem = useMemo(
    () =>
      sliderData.map((item: ISliderData) => (
        <SliderItem {...item} key={item.id} />
      )),
    []
  )

  return (
    <div className="slider">
      <div className="slider__container">
        <Slider ref={sliderEl} {...SliderConfig({ afterChange })}>
          {renderSliderItem}
        </Slider>
      </div>
      <a href={sliderData[currentId].link} className="slider__bottom">
        <SliderPrevious sliderPrevious={sliderPrevious} />
        <ProductItemContent {...sliderData[currentId]} />
        <SliderNext sliderNext={sliderNext} />
      </a>
    </div>
  )
}

export default CarouselSection
