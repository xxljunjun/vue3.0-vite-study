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
    },{
        path: "/studyhook",
        name: "studyhook",
        component: () => import("../pages/studyhook/index.vue")
    },{
        path: "/studytoref",
        name: "studytoref",
        component: () => import("../pages/studytoref/index.vue")
    },{
        path: "/studyotherapi",
        name: "studyotherapi",
        component: () => import("../pages/studyotherapi/index.vue")
    },{
        path: "/studycustomref",
        name: "studycustomref",
        component: () => import("../pages/studycustomref/index.vue")
    },{
        path: "/studyteleport",
        name: "studyteleport",
        component: () => import("../pages/studyteleport/index.vue")
    },{
        path: "/studysuspense",
        name: "studysuspense",
        component: () => import("../pages/studysuspense/index.vue")
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
