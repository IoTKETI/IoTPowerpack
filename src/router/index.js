import Vue from 'vue'
import VueRouter from 'vue-router'

import powerpack_detail from '../components/powerpack_detail.vue'
import powerpack_detail15 from '../components/powerpack_detail15.vue'
import test2 from '../components/test2.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: '',
        component: powerpack_detail
    },
    {
        path: '/powerpack_detail15',
        name: 'powerpack_detail15',
        component: powerpack_detail15
    },
    {
        path: '/test2',
        name: 'test2',
        component: test2
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
