import Vue from 'vue'
import Router from 'vue-router'
import datasets from './components/container'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/datasets',
            name: 'datasets',
            component: datasets
        }
    ]
})
