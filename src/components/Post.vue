<template>
  <p>
    <span>{{post.date}}</span>
    <span>{{post.description}}</span>
  </p>
</template>

<script>
export default {
  props: {
    post: Object,
  }
}
</script>

<style>

</style>
