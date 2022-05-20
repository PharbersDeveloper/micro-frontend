import Vue from 'vue'
import Router from 'vue-router'
import ResourceContainer from '../src/components/ph-resouce-container'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'ResourceContainer',
            component: ResourceContainer
        }
    ]
})
