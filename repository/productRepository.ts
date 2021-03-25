import { AxiosPromise } from 'axios'
import apiCaller from './apiCaller'

const resources = {
  product: '/assets/product.json',
}

Object.freeze(resources)

export default {
  fetchProduct: (): AxiosPromise<any> => {
    return apiCaller('GET', resources.product)
  },
}

export type TProductRepository = {
  fetchProduct?: () => AxiosPromise<any>
}
