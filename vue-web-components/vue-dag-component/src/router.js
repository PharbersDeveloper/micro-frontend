import Vue from 'vue'
import Router from 'vue-router'
import dag from './components/page/dag-page.vue'
import dagRun from './components/page/dag-page-run.vue'
import maxdag from './components/page/max-dag-page.vue'
import extract from './components/page/max-extract-dag-page.vue'

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
            path: '/dag-run',
            name: 'dagRun',
            component: dagRun
        },
        {
            path: '/max',
            name: 'maxdag',
            component: maxdag
        },{
            path: '/extract',
            name: 'extract',
            component: extract
        }
    ]
})
