import Vue from 'vue'
import Vuex from 'vuex'
import Post from './model/Post'
import localStoragePlugin from './model/localStoragePlugin'

export const ADD_PLUS_ACTION = 'ADD_PLUS_ACTION'
export const ADD_POST_MUTATION = 'ADD_POST_MUTATION'
const LOCAL_AUTOLOAD_MUTATION = 'LOCAL_AUTOLOAD_MUTATION'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  plugins: [
    localStoragePlugin({
      autoLoadMutation: LOCAL_AUTOLOAD_MUTATION,
    })
  ],

  state: {
    posts: [],
  },
  
  mutations: {
    [LOCAL_AUTOLOAD_MUTATION](state, payload) {
      Object.assign(state, payload.state)
    },
    [ADD_POST_MUTATION](state, post) {
      state.posts.push(post)
    },
  },

  actions: {
    [ADD_PLUS_ACTION]({ commit }, { description }) {
      commit(ADD_POST_MUTATION, new Post({
        description,
        value: 1,
      }))
    }
  }
})
