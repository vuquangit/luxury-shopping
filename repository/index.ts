import { get } from 'lodash'
import StocksRepository, { TStockRepository } from './stocksRepository'
import ProductRepository, { TProductRepository } from './productRepository'

export type IRepository = TStockRepository | TProductRepository

const repositories = {
  stocks: StocksRepository,
  product: ProductRepository,
}

export default {
  get: (name: string): any => get(repositories, name),
}
