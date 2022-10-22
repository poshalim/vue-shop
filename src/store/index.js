import { createStore } from 'vuex'
import addressSearch from '@/store/modules/addressSearch'
import cart from '@/store/modules/cart'
import products from '@/store/modules/products'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    addressSearch,
    cart,
    products
  }
})
