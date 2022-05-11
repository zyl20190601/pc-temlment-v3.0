<template>
  <div class="home">
    <img alt="Vue logo" :src="getImgSrc('logo.png')" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/hooks/use-store'
import useRouter from '@/hooks/user-navigate';

export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const store = useStore()
    const {navigateTo} = useRouter()
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
