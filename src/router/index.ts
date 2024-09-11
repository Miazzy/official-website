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
        path: '/products',
        name: 'products',
        component: () => import('../views/Products/Products.vue')
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

