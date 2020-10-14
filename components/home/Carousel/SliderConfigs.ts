import { Settings } from 'react-slick'

const SliderConfig = (options: any = {}): Settings => ({
  dots: false,
  lazyLoad: true,
  pauseOnDotsHover: true,
  arrows: false,
  pauseOnHover: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  initialSlide: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  ...options,
})

export default SliderConfig
