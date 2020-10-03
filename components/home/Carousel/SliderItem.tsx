import { FC } from 'react'
import LazyImage from 'components/elements/LazyImage'

type Props = {
  image: string
  title: string
  link: string
  content_link: string
}

const HomePage: FC<Props> = ({ image = '', link = '' }) => {
  return (
    <a href={link} className="slider__item">
      {/* <div
        className="slider__item--image"
        style={{ backgroundImage: `url(${image})` }}
      /> */}
      <LazyImage
        src={image}
        isBackgroundImage
        className={'slider__item--image'}
      />
    </a>
  )
}

export default HomePage
