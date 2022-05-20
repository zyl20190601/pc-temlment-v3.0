<template>
  <ElConfigProvider :locale="locale">
    <keep-alive>
      <router-view
        class="app-content-box"
        v-if="$route.meta.keepAlive && isRouterAlive"
      ></router-view>
    </keep-alive>
    <router-view
      class="app-content-box"
      v-if="!$route.meta.keepAlive && isRouterAlive"
    ></router-view>
  </ElConfigProvider>
</template>

<script lang="ts" setup>
import { ref, provide, nextTick } from 'vue';
import zhCn from 'element-plus/lib/locale/lang/zh-cn'


defineOptions({
  name: 'App',
})

const locale = zhCn // 饿了么国际化，设置为中文

const isRouterAlive = ref(true);
provide('reload', reload);

async function reload() {
  isRouterAlive.value = false;
  await nextTick();
  isRouterAlive.value = true;
}

</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
