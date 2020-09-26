import { NextPage } from 'next'
import { DefaultLayout } from 'layout'

interface Props {
  userAgent?: string
}

const News: NextPage<Props> = ({ userAgent }) => (
  <DefaultLayout>Your user agent: {userAgent}</DefaultLayout>
)

News.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}

export default News
