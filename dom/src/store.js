import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: []
  },
  mutations: {
    jiaCart(state, item) {
      let falg = state.lists.find(items => items.id == item.id)
      if (falg) {
        falg.num++
      } else {
        state.lists.push(item)
      }
    },
    jia(state, id) {
      let falg = state.lists.find(items => items.id == id)
      if (falg && falg.num < 10) {
        falg.num++
      }
    },
    jian(state, id) {
      let falg = state.lists.find(items => items.id == id)
      if (falg && falg.num > 1) {
        falg.num--
      }
    }
  },
  actions: {

  }
})
