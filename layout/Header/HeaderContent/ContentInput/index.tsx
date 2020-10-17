import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const ContentInput: FC = () => {
  return (
    <div className="nav-header__search-box">
      <div className="nav-header__search-box--icon">
        <FontAwesomeIcon icon={faSearch} style={{ height: '1.2rem' }} />
      </div>
      <div className="nav-header__search-box--input">
        <input type="text" placeholder="Product, Store..." />
        <div className="search-suggest">
          <div className="search-suggest__sex">
            <ul className="search-suggest__sex--women">
              <li>WOMEN</li>
              <li>Handbags</li>
              <li>Small Leather Goods</li>
              <li>Shoes</li>
            </ul>
            <ul className="search-suggest__sex--men">
              <li>MEN</li>
              <li>Bags</li>
              <li>Shoes</li>
              <li>Ready-to-Wear</li>
            </ul>
          </div>
          <div className="search-suggest__product">
            <h2 className="search-suggest__product--title">PRODUCTS</h2>
            <div className="search-suggest__product--list-img">
              <div className="img-card">
                <a className="img-card__link" href="/">
                  <img className="img-card__link--image" src="/" alt="logo" />
                  <p className="img-card__link--content">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentInput
