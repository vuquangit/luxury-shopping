import { AxiosPromise } from 'axios'
import apiCaller from './apiCaller'

const resources = {
  stock: '/assets/stocks.json',
}

Object.freeze(resources)

export default {
  fetchAllStock: (): AxiosPromise<any> => apiCaller('GET', resources.stock),
}

export type TStockRepository = {
  fetchAllStock: () => AxiosPromise<any>
}
