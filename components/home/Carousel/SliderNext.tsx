import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

type Props = {
  sliderNext: (event: any) => void
}

const SliderNext: FC<Props> = ({ sliderNext }) => (
  <button
    aria-label="next"
    type="button"
    className="btn btn--secondary slider__button-next"
    onClick={sliderNext}
  >
    <FontAwesomeIcon icon={faChevronRight} />
  </button>
)

export default SliderNext
