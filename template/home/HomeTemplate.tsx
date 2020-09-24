import { DefaultLayout } from 'layout'
import { FC, ReactNode } from 'react'

const HomeTemplate: FC & { Layout?: ReactNode } = () => {
  return <div className="container">This is new homeTemplate page</div>
}

HomeTemplate.Layout = DefaultLayout

export default HomeTemplate
