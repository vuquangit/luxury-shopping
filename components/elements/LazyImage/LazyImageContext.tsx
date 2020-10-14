import React, { useState, useEffect, createContext, FC } from 'react'
import LazyLoad, { ILazyLoadInstance } from 'vanilla-lazyload'
import { TProps } from './index'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Context = createContext()

export const LazyImageProvider: FC = ({ children }) => {
  const [lazyLoad, setLazyLoad] = useState<ILazyLoadInstance | null>(null)

  //   function logElementEvent(eventName: string, element: HTMLElement) {
  //     console.log(Date.now(), eventName, element.getAttribute('data-bg-multi'))
  //   }
  //   const callback_enter = function (element: any) {
  //     logElementEvent('🔑 ENTERED', element)
  //   }
  //   const callback_exit = function (element: any) {
  //     logElementEvent('🚪 EXITED', element)
  //   }
  //   const callback_loading = function (element: any) {
  //     logElementEvent('⌚ LOADING', element)
  //   }
  //   const callback_applied = function (element: any) {
  //     logElementEvent('👍 APPLIED', element)
  //   }
  //   const callback_loaded = function (element: any) {
  //     logElementEvent('👍 LOADED', element)
  //   }
  //   const callback_error = function (element: { src: string }) {
  //     logElementEvent('💀 ERROR', element)
  //     element.src = 'https://via.placeholder.com/440x560/?text=Error+Placeholder'
  //   }
  //   const callback_finish = function () {
  //     logElementEvent('✔️ FINISHED', document.documentElement)
  //   }
  //   const callback_cancel = function (element: any) {
  //     logElementEvent('🔥 CANCEL', element)
  //   }

  useEffect((): any => {
    const options = {
      elements_selector: '.lazyImage__img',
      //   // Assign the callbacks defined above
      //   callback_enter: callback_enter,
      //   callback_exit: callback_exit,
      //   callback_cancel: callback_cancel,
      //   callback_applied: callback_applied,
      //   callback_loading: callback_loading,
      //   callback_loaded: callback_loaded,
      //   callback_error: callback_error,
      //   callback_finish: callback_finish,
    }

    if (!lazyLoad) setLazyLoad(new LazyLoad(options))

    return () => lazyLoad && lazyLoad.destroy()
  }, [lazyLoad])

  return <Context.Provider value={lazyLoad}>{children}</Context.Provider>
}

export const withLazyImageContext = (Component: FC<TProps>) => (
  props: JSX.IntrinsicAttributes & TProps & { children?: React.ReactNode }
): JSX.Element => (
  <Context.Consumer>
    {(context) => <Component {...props} lazyLoad={context} />}
  </Context.Consumer>
)
