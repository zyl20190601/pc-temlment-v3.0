<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/hooks/useStore'

export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const store = useStore()
    store.commit('user/MU_SET_USER_INFO')
  }
})
</script>
