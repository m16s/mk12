<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.description">
        <Post :post="post"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Post from '@/components/Post'

export default {
  components: {
    Post,
  },

  mounted() {
    this.$nextTick(() => {
      console.log('after mount', this.$store)
    })
  },

  computed: {
    // @NTM: do not use arrow functions here (no $store)
    posts() {
      return this.$store.state.posts
    }
  },
}
</script>

<style>

</style>
