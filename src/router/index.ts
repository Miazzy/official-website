import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home/Home.vue')
    },
    {
        path: '/plans',
        name: 'plans',
        component: () => import('../views/Plans/Plans.vue')
    },
    {
        path: '/aboutus',
        name: 'aboutus',
        component: () => import('../views/AboutUs/AboutUs.vue')
    },
    {
        path: '/projectCases',
        name: 'projectCases',
        component: () => import('../views/ProjectCases/ProjectCases.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

