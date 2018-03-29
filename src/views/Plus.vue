<template>
  <div>
    What good have you done?
    <input v-model.trim="description">

    <button>BACK</button>
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
    }
  },
}
</script>

<style>

</style>
