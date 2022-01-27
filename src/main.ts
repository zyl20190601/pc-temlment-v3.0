import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import mixin from '@/mixin'

import naive from 'naive-ui'

// 重置样式
import '@/assets/scss/reset.scss'
// 重置 naive-ui 么样式
import '@/assets/scss/reset-naive-ui.scss'

createApp(App)
  .use(naive)
  .use(mixin)
  .use(store, key)
  .use(router)
  .mount('#app')
