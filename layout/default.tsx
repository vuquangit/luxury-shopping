import { FC } from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

const Layout: FC = ({ children }) => {
  return (
    <div className="default-layout">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

export default Layout
