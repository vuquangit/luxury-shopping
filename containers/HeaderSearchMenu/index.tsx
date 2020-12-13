import { FC } from 'react'

const data = {
  women: ['WOMEN', 'Handbags', 'Small Leather Goods', 'Shoes'],
  men: ['MEN', 'Bags', 'Shoes', 'Ready-to-Wear'],
  img: [
    { link: '/image/input-coat.jpg', content: 'Hooded Wrap Coat With Belt' },
    { link: '/image/input-pass.jpg', content: 'Attrape-Rêves' },
    { link: '/image/input-bag.jpg', content: 'Alpha Wearable Wallet bag' },
    { link: '/image/input-shoe.jpg', content: 'LV Trainers' },
  ],
}
const InputMenu: FC = () => {
  return (
    <>
      <div className="search-suggest-container">
        <div className="search-suggest">
          <div className="search-suggest__sex">
            <div className="search-suggest__sex--container">
              <div className="women">
                <ul className="women__content">
                  {data.women.map((item) =>
                    item === 'WOMEN' ? (
                      <li className="women__content--title">{item}</li>
                    ) : (
                      <li className="women__content--item">{item}</li>
                    )
                  )}
                </ul>
              </div>
              <div className="men">
                <ul className="men__content">
                  {data.men.map((item) =>
                    item === 'MEN' ? (
                      <li className="men__content--title">{item}</li>
                    ) : (
                      <li className="men__content--item">{item}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="search-suggest__product">
            <div className="product-container">
              <h2 className="product-container__title">PRODUCTS</h2>
              <div className="product-container__list-img">
                {data.img.map((item) => (
                  <div key={item.content} className="img-card">
                    <a className="img-card__link" href="/">
                      <img
                        className="img-card__link--image"
                        src={item.link}
                        alt="logo"
                      />
                      <p className="img-card__link--content">{item.content}</p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InputMenu
