import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    result:[],
  },
  mutations: {
    book(state,payload){
      state.result.push(payload)
    }
  },
  actions: {
    book({commit},payload){
      commit('book',payload)
    }
  },
  modules: {
  }
})
