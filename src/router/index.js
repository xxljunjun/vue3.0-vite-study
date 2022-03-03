import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../pages/home/index.vue")
    },
    {
        path: "/mine",
        name: "mine",
        component: () => import("../pages/mine/mine.vue")
    },
    {
        path: "/proxy",
        name: "proxy",
        component: () => import("../pages/proxy/index.vue")
    },
    {
        path: "/computed",
        name: "proxy",
        component: () => import("../pages/computed/index.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
