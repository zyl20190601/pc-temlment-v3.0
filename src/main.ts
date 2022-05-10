import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import mixin from '@/mixin'
import { getImgSrc } from '_ut/tools/index'

import naive from 'naive-ui'

// 重置样式
import '@/assets/scss/reset.scss'
// 重置 naive-ui 么样式
import '@/assets/scss/reset-naive-ui.scss'

const app = createApp(App)

// 获取图片
app.config.globalProperties.getImgSrc = getImgSrc

app.use(naive)
  .use(mixin)
  .use(store, key)
  .use(router)
  .mount('#app')
