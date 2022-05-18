import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import mixin from '@/mixin'
import { getImgSrc } from '_ut/tools/index'

// 重置样式
import '@/assets/scss/reset.scss'

// 重置饿了么样式
import '@/assets/scss/reset-element-plus-ui.scss'

const app = createApp(App)

// 获取图片
app.config.globalProperties.getImgSrc = getImgSrc

app.use(mixin)
  .use(store, key)
  .use(router)
  .mount('#app')
