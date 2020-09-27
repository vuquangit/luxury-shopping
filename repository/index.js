import StocksRepository from './stocksRepository'

const repositories = {
  stocks: StocksRepository,
}

export default {
  get: (name) => repositories[name]
}
