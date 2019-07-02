import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [
    { path: '/login', component: () => import('@/views/login/index'), hidden: true },
    { path: '/', redirect: '/login', hidden: true },
    {
        path: '/', component: Layout,
        children: [{
            path: 'index',
            component: () => import('@/views/home/index'),
            name: 'home',
            meta: { title: '首页', noCache: true }
        }]
    },
    { path: '/product-form', name: 'product-form', component: () => import('@/views/product/product-form'), hidden: true },
    { path: '/auxiliary-machine-form', name: 'auxiliary-machine-form', component: () => import('@/views/product/auxiliary-machine-form'), hidden: true },
    { path: '/product-auxiliary-machine-info-form', name: 'product-auxiliary-machine-info-form', component: () => import('@/views/product/product-auxiliary-machine-info-form'), hidden: true },
    { path: '/controller-run-info', name: 'controller-run-info', component: () => import('@/components/controller-run-info'), hidden: true },
    /* { path: '/device-run-info-page', name: 'device-run-info-page', component: () => import('@/views/run-info/device-run-info'), hidden: true },*/
    { path: '/product-map', name: 'product-map', component: () => import('@/views/product/product-map'), hidden: true },

    { path: '/boiler-model-complete-page', name: 'boiler-model-complete-page', component: () => import('@/views/boiler-model/boiler-model-complete-page'), hidden: true },
    /* { path: '/boiler-fault-alarm-management', name: 'boiler-fault-alarm-management', component: () => import('@/views/boiler-fault-alarm-management/index'), hidden: true }*/
]

export default new Router({
    routes: constantRouterMap
})
