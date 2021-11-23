
import { createWebHistory, createRouter } from 'vue-router'
//创建路由
const history = createWebHistory()
const router = createRouter({
    // 两种路由模式，默认是 hash 路由，还可以改成 history
    history,
    // base:'/',
    routes: [
        {
            path: "/",
            name:'首页',
            component: ()=>import('../pages/home/index.vue')
        },
        {
            path: "/mine",
            name:'我的',
            component: ()=>import('../pages/mine/mine.vue')
        },
        // 找不到页面时，跳转到首页
        // { path: "/login", components: { login: Login } },
        // { path: "/*", redirect: "/home" },
    ],
})
export default router
