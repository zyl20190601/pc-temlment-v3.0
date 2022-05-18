<template>
  <div class="home">
    <img alt="Vue logo" :src="getImgSrc('logo.png')" />
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '@/hooks/use-store'

const store = useStore()
store.commit('user/MU_SET_USER_INFO')

</script>

<style lang="scss" scoped>
.home {
  height: 100px;
  width: 100px;
}
</style>
