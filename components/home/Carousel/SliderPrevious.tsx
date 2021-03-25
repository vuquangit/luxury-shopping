import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

type Props = {
  sliderPrevious: (event: any) => void
}

const SliderPrevious: FC<Props> = ({ sliderPrevious }) => (
  <button
    aria-label="previous"
    type="button"
    className="btn btn--secondary slider__button-prev"
    onClick={sliderPrevious}
  >
    <FontAwesomeIcon icon={faChevronLeft} />
  </button>
)

export default SliderPrevious
