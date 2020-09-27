// commentsRepository

import apiCaller from './apiCaller'

const resources = {
  stock: '/assets/stocks.json',
  reports: '/reports',
  whiteListURL: '/assets/whitelist.domain.json'
}

Object.freeze(resources)

export default {
  fetchAllStock () {
    return apiCaller('GET', resources.stock)
  },

  // fetchMoreComments (params) {
  //   return apiCaller('GET', resources.comments, null, params)
  // },

  // createComment (data) {
  //   return apiCaller('POST', `${resources.comments}`, { post_id: data.postId, message: data.message })
  // },
}
