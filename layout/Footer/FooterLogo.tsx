import { FC } from 'react'
import LogoSVG from './logo.svg'

const FooterLogo: FC = () => {
  return (
    <div className="footer-breadcrumb">
      <div className="logo">
        <div className="logo__wrap">
          <LogoSVG />
          <span className="logo__wrap--text">
            LUXURY SHOPPING Official Website
          </span>
        </div>
      </div>
    </div>
  )
}

export default FooterLogo
