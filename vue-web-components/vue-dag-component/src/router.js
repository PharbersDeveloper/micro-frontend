import Vue from 'vue'
import Router from 'vue-router'
import dag from './components/page/dag-page.vue'
import maxdag from './components/page/max-dag-page.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'dag',
            component: dag
        },
        {
            path: '/max',
            name: 'maxdag',
            component: maxdag
        }
    ]
})
