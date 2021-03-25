import { FC } from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import { AdminStoreProvider } from './AdminStoreProvider'

const Layout: FC = ({ children }) => {
  return (
    <AdminStoreProvider>
      <div className="default-layout">
        <Header />
        <Main>{children}</Main>
        <Footer />
      </div>
    </AdminStoreProvider>
  )
}

export default Layout
