<template>
  <div>
    What good have you done?
    <input v-model.trim="description" autofocus>

    <router-link to="/">
      <button>BACK</button>
    </router-link>
    <button @click="addPlus()">ADD PLUS</button>
  </div>
</template>

<script>
import {ADD_PLUS_ACTION} from '@/store'

export default {
  data: () => ({
    description: '',
  }),

  methods: {
    addPlus() {
      this.$store.dispatch({
        type: ADD_PLUS_ACTION,
        description: this.description,
      })

      this.$router.push('/')
    }
  },
}
</script>

<style>

</style>
