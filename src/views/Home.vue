<template>
  <div class="home">
    <img
      alt="Vue logo"
      :src="getImgSrc('logo.png')"
    />
    <CityLinkage />
  </div>
</template>

<script lang="ts" setup>
// import { ref } from 'vue';

import { useStore } from '@/hooks/use-store'
import CityLinkage from '_com/city-linkage/index.vue'

defineOptions({
  name: 'Home'
})

const store = useStore()
store.commit('user/MU_SET_USER_INFO')
</script>

<style lang="scss" scoped>
.home {
  height: 100px;
  width: 100px;
}
</style>
