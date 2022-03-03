import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './index.css'
import store from './store'
import router from './router'

//创建应用实例对象
const app = createApp(App)
console.log("@@",app)
app.use(store)
.use(router)
.use(ElementPlus)
.mount('#app')
// console.log(app.config)




/*
vue3.0初始化工程项目
// import { createApp } from 'vue'
// import App from './App.vue'
// createApp(App).mount('#app')
*/



/*
vue2.0的写法
const vm = new Vue({
    render:h=>h(App)
})
vm.$mount("#app")
*/

