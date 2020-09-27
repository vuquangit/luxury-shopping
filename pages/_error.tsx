import { NextPage } from 'next'

import { DefaultLayout } from 'layout'

interface Props {
  statusCode?: number
}

const Error: NextPage<Props> = ({ statusCode }) => {
  return (
    <DefaultLayout>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    </DefaultLayout>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
