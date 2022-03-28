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


/*
    vue3对某些api做了迁移
        ==>app.component
        ==>app.directive
        ==>app.mixin
        ==>app.use
        ==>app.config.globalProperties
        ==>vue.config.productionTip去除了（vue3更智能了知道你处于的环境）
*/

/*
    data选项必须是一个函数
    过渡类名的修改
    移除了keyCode做作为v-on的修饰符，同时也不再支持config.keyCodes
    移除@click.native
        ==>原生的click事件和自定义事件的冲突
        ==>emits新增的自定义事件
    移除了过滤器filter
        ==>打破了大括号内表达式是‘只是javascript’的假设
        ==>推荐methods和computed去实现
*/

