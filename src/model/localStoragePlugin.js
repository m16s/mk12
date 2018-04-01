import * as localforage from 'localforage'
import { ADD_POST_MUTATION } from '../store'
import Post from './Post';

const STORE_KEY = 'state'
const load = () => localforage
  .getItem(STORE_KEY)
  .catch(err => console.error('Load local posts error', err))
const save = data => localforage
  .setItem(STORE_KEY, data)
  .catch(err => console.error('Save local posts error', err))

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
        const state = {
          ...value,
          posts: value.posts.map(raw => new Post().deserialize(raw)),
        }
        store.commit({
          type: autoLoadMutation,
          state,
        })
      })
  }

  // The mutation comes in the format of `{ type, payload }`.
  store.subscribe((mutation, state) => {
    switch(mutation.type) {
      case ADD_POST_MUTATION: {
        const posts = state.posts.map(post => post.serialize())
        const serializedState = {
          ...state,
          posts,
        }
        save(serializedState)
      }
    }
  })
}

export default localStoragePlugin;