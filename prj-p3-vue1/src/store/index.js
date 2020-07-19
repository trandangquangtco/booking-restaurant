import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.use(Vuex)
// Vue.use(axios)
export default new Vuex.Store({
  state: {
    result:[],
    // profile:[]
  },
  mutations: {
    book(state,payload){
      state.result.push(payload)
    },
    // setProfile(state,profile){
    //   state.profile=profile
    // }
  },
  actions: {
    book({commit},payload){
      commit('book',payload)
    },
    // loadProfile({commit},token){
    // axios.get('http://localhost:3000/guestProfile')
    // .then(response=>response.data)
    // .then(profile=>{
    //   commit('setProfile',profile)
    // })
    // .catch(function (error) {
    // console.log(error);
    // })
    // }
  },
  modules: {
  }
})
