import * as localforage from 'localforage'
import { ADD_RECORDS_MUTATION } from '../store'

const STORE_KEY = 'state'
const load = () => localforage
  .getItem(STORE_KEY)
  .catch(err => console.error('Load local records error', err))
const save = data => localforage
  .setItem(STORE_KEY, data)
  .catch(err => console.error('Save local records error', err))

localforage.config({
  name: 'mk12',
  storeName: STORE_KEY,
  version: 1,
})

const localStoragePlugin = ({autoLoadMutation}) => store => {
  if (autoLoadMutation) {
    // initial loading
    load()
      .then(value => {
        const state = value
        store.commit({
          type: autoLoadMutation,
          state,
        })
      })
  }

  // The mutation comes in the format of `{ type, payload }`.
  store.subscribe((mutation, state) => {
    switch(mutation.type) {
      case ADD_RECORDS_MUTATION: {
        const records = state.records.map(rec => rec.toString())
        const stateClone = {
          ...state,
          records,
        }
        // const serializedState = JSON.stringify(stateClone)
        const serializedState = stateClone
        save(serializedState)
      }
    }
  })
}

export default localStoragePlugin;