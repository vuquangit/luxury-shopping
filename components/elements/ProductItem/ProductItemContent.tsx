import { FC } from 'react'

type Props = {
  title: string
  subtitle?: string
  content_link?: string
}

const ProductItemContent: FC<Props> = ({ title, subtitle, content_link }) => {
  return (
    <div className="home-product__content">
      <div className="home-product__content--title">{title}</div>
      {subtitle && (
        <div className="home-product__content--subtitle">{subtitle}</div>
      )}
      {content_link && (
        <div className="home-product__content--link">
          <div className="btn btn--primary content-link-btn">
            {content_link}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductItemContent
