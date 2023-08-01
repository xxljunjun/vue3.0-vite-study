import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './index.css'
import router from './router'
import {createPinia} from 'pinia'
// 创建 Pinia 实例
const pinia = createPinia()

// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//创建应用实例对象
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(router)
.use(ElementPlus)
.use(pinia)
.mount('#app')
