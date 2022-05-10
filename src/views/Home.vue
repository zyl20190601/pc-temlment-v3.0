<template>
  <div class="home">
    <img alt="Vue logo" :src="getImgSrc('logo')" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/hooks/use-store'

export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const store = useStore()
    store.commit('user/MU_SET_USER_INFO')
  }
})
</script>

<style lang="scss" scoped>
.home {
  height: 100px;
  width: 100px;
}
</style>
