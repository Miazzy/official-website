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
        path: '/cases',
        name: 'cases',
        component: () => import('@/views/Cases/ProjectCases.vue')
    },
    {
        path: '/inform',
        name: 'inform',
        component: () => import('@/views/Inform/InformationCenter.vue')
    },
]

const mobileRoutes = [
    {
        path: '/mobile/home',
        name: 'mobilehome',
        component: () => import('@/mobile/Home/Home.vue')
    },
    {
        path: '/mobile/plans/operate',
        name: 'mobileplansoperate',
        component: () => import('@/mobile/Plans/PlansOperate..vue')
    },
    {
        path: '/mobile/plans/farm',
        name: 'mobileplansfarm',
        component: () => import('@/mobile/Plans/PlansFarm..vue')
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: [...routes, ...mobileRoutes],
})

export default router;

