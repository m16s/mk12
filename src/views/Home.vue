<template>
  <div class="home">
    <div class="stats">Stats</div>
    <div class="actions">
      <router-link to="/plus">
        <button>+</button>
      </router-link>
      <router-link to="/minus">
        <button>-</button>
      </router-link>
    </div>
    <div class="footer">
      <router-link to="/history">
        <button>History</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
