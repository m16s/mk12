import Vue from 'vue'
import Vuex from 'vuex'
import Record from './model/Record'

export const ADD_PLUS_ACTION = 'ADD_PLUS_ACTION'
export const ADD_RECORD_MUTATION = 'ADD_RECORD_MUTATION'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  state: {
    records: [],
  },
  
  mutations: {
    [ADD_RECORD_MUTATION](state, record) {
      state.records.push(record)
    },
  },

  actions: {
    [ADD_PLUS_ACTION]({ commit }, { description }) {
      commit(ADD_RECORD_MUTATION, new Record({
        description,
        value: 1,
      }))
    }
  }
})
