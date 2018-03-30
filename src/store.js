import Vue from 'vue'
import Vuex from 'vuex'
import Record from './model/Record'
import localStoragePlugin from './model/localStoragePlugin'

export const ADD_PLUS_ACTION = 'ADD_PLUS_ACTION'
export const ADD_RECORDS_MUTATION = 'ADD_RECORDS_MUTATION'
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
    records: [],
  },
  
  mutations: {
    [LOCAL_AUTOLOAD_MUTATION](state, payload) {
      Object.assign(state, payload.state)
    },
    [ADD_RECORDS_MUTATION](state, record) {
      state.records.push(record)
    },
  },

  actions: {
    [ADD_PLUS_ACTION]({ commit }, { description }) {
      commit(ADD_RECORDS_MUTATION, new Record({
        description,
        value: 1,
      }))
    }
  }
})
