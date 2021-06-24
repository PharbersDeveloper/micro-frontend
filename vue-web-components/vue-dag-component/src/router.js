import Vue from 'vue'
import Router from 'vue-router'
import dag from './views/dag-demo.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'dag',
            component: dag
        }
    ]
})
