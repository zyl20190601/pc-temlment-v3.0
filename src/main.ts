import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import mixin from '@/mixin'


// 重置样式
import '@/assets/scss/reset.scss'
// 重置 饿了么样式
import '@/assets/scss/reset-element-ui.scss'

createApp(App)
  .use(mixin)
  .use(store, key)
  .use(router)
  .mount('#app')