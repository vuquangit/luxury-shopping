import { FC, useRef, useEffect } from 'react'
import InputMenu from './InputMenu'
import NewMenu from './NewMenu'
import WomenMenu from './WomenMenu'
import MenMenu from './MenMenu'
import ArtMenu from './ArtMenu'

type Props = {
  handleCloseMenu: () => void
  dataReceive: string
}

const TablebMenu: FC<Props> = ({ handleCloseMenu, dataReceive }) => {
  const ref = useRef(null)

  const handleClickOutside = (event: any) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (ref.current && !ref.current.contains(event.target)) {
      handleCloseMenu()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  const _getRender = (param: string) => {
    switch (param) {
      case 'input':
        return <InputMenu />
      case 'new':
        return <NewMenu />
      case 'women':
        return <WomenMenu />
      case 'men':
        return <MenMenu />
      case 'art of living':
        return <ArtMenu />
      default:
        return null
    }
  }
  return <div ref={ref}>{_getRender(dataReceive)}</div>
}

export default TablebMenu
