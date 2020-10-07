import React, { useEffect, FC } from 'react'
import { withLazyImageContext } from './LazyImageContext'
import classNames from 'classnames'

export type TProps = {
  src: string
  aspectRatio?: [number, number]
  lazyLoad: any
  isBackgroundImage?: boolean
  className?: string
}

const LazyImage: FC<TProps> = ({
  src,
  aspectRatio = [0, 0],
  lazyLoad,
  isBackgroundImage,
  className = '',
  ...restProps
}) => {
  const paddingTop = `${(aspectRatio[1] / aspectRatio[0]) * 100}%`

  useEffect(() => {
    if (lazyLoad) lazyLoad.update()
  }, [src, aspectRatio, lazyLoad])

  const classImage = classNames('lazyImage__img', className)

  return (
    <div className="lazyImage" style={{ paddingTop }}>
      {isBackgroundImage ? (
        <div
          className={classImage}
          style={{ backgroundImage: `url(${src})` }}
        />
      ) : (
        <img className={classImage} src={src} {...restProps} />
      )}
    </div>
  )
}

export default withLazyImageContext(LazyImage)
