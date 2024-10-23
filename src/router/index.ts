import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home/Home.vue')
    },
    {
        path: '/plans',
        name: 'plans',
        component: () => import('@/views/Plans/Plans.vue')
    },
    {
        path: '/plans/photovoltaic',
        name: 'plansphotovoltaic',
        component: () => import('@/views/Plans/PlansPhotovoltaic.vue')
    },
    {
        path: '/plans/aquatic/equipment',
        name: 'plansaquaticequipment',
        component: () => import('@/views/Plans/PlansAquaticEquipment.vue')
    },
    {
        path: '/plans/aquatic/intel',
        name: 'plansaquaticintel',
        component: () => import('@/views/Plans/PlansAquaticIntel.vue')
    },
    {
        path: '/aboutus',
        name: 'aboutus',
        component: () => import('@/views/AboutUs/AboutUs.vue')
    },
    {
        path: '/projectCases',
        name: 'projectCases',
        component: () => import('@/views/ProjectCases/ProjectCases.vue')
    },
    {
        path: '/informationCenter',
        name: 'informationCenter',
        component: () => import('@/views/InformationCenter/InformationCenter.vue')
    },
]

const mobileRoutes = [
    {
        path: '/mobileHome',
        name: 'mobileHome',
        component: () => import('@/mobile/Home/Home.vue')
    },
    {
        path: '/mobilePlans',
        name: 'mobilePlans',
        component: () => import('@/mobile/Plans/Plans.vue')
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: [...routes, ...mobileRoutes],
})

export default router;

