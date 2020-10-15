import { FC } from 'react'
import FooterLogo from './FooterLogo'
import FooterNavigation from './FooterNavigation'

const Footer: FC = () => {
  return (
    <footer role="contentinfo" className="default-layout__footer">
      <FooterLogo />
      <FooterNavigation />
    </footer>
  )
}

export default Footer
