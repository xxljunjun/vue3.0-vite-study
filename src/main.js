import { createApp } from 'vue'
import App from './App.vue'
import './style/index.css'

// 引入资源
import router from './router/index.js'
// console.log("获取路由",router)

const app = createApp(App)
// console.log(app.config)
// 注入路由
app.use(router)
app.mount('#app')
