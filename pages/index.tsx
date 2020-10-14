import { FC } from 'react'
import { DefaultLayout } from 'layout'
import CarouselHome from 'components/home/Carousel'
import NewProducts from 'components/home/NewProducts'
import OtherProducts from 'components/home/OtherProducts'

const HomePage: FC = () => {
  return (
    <DefaultLayout>
      <CarouselHome />
      <NewProducts />
      <OtherProducts />
    </DefaultLayout>
  )
}

export default HomePage
