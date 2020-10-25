import { FC } from 'react'

const InputMenu: FC = () => {
  return (
    <>
      <div className="search-suggest">
        <div className="search-suggest__sex">
          <div className="search-suggest__sex--container">
            <div className="women">
              <ul className="women__content">
                <li className="women__content--title">WOMEN</li>
                <li className="women__content--item">Handbags</li>
                <li className="women__content--item">Small Leather Goods</li>
                <li className="women__content--item">Shoes</li>
              </ul>
            </div>
            <div className="men">
              <ul className="men__content">
                <li className="men__content--title">MEN</li>
                <li className="men__content--item">Bags</li>
                <li className="men__content--item">Shoes</li>
                <li className="men__content--item">Ready-to-Wear</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="search-suggest__product">
          <div className="product-container">
            <h2 className="product-container__title">PRODUCTS</h2>
            <div className="product-container__list-img">
              <div className="img-card">
                <a className="img-card__link" href="/">
                  <img
                    className="img-card__link--image"
                    src="/image/input-coat.jpg"
                    alt="logo"
                  />
                  <p className="img-card__link--content">
                    Hooded Wrap Coat With Belt
                  </p>
                </a>
              </div>

              <div className="img-card">
                <a className="img-card__link" href="/">
                  <img
                    className="img-card__link--image"
                    src="/image/input-pass.jpg"
                    alt="logo"
                  />
                  <p className="img-card__link--content">Attrape-Rêves</p>
                </a>
              </div>

              <div className="img-card">
                <a className="img-card__link" href="/">
                  <img
                    className="img-card__link--image"
                    src="/image/input-bag.jpg"
                    alt="logo"
                  />
                  <p className="img-card__link--content">
                    Alpha Wearable Wallet bag{' '}
                  </p>
                </a>
              </div>

              <div className="img-card">
                <a className="img-card__link" href="/">
                  <img
                    className="img-card__link--image"
                    src="/image/input-shoe.jpg"
                    alt="logo"
                  />
                  <p className="img-card__link--content">LV Trainers </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InputMenu
