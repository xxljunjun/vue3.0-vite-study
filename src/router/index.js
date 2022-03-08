import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../pages/home/index.vue")
    },
    {
        path: "/studysetup",
        name: "studysetup",
        component: () => import("../pages/studysetup/index.vue")
    },
    {
        path: "/studycomputed",
        name: "studycomputed",
        component: () => import("../pages/studycomputed/index.vue")
    },
    {
        path: "/studywatch",
        name: "studywatch",
        component: () => import("../pages/studywatch/index.vue")
    },{
        path: "/studylife",
        name: "studylife",
        component: () => import("../pages/studylife/index.vue")
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
