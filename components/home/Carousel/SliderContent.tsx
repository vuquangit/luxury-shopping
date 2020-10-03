import { FC } from 'react'

interface IContent {
  title: string
  content_link: string
}
type Props = {
  content: IContent
}

const HomePage: FC<Props> = ({ content = {} }) => {
  return (
    <div className="slider__item--content">
      <h2 className="content-title">{content.title}</h2>
      <div className="content-link">
        <div className="btn btn--primary content-link__btn">
          {content.content_link}
        </div>
      </div>
    </div>
  )
}

export default HomePage
