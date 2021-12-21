import Vue from 'vue'
import Router from 'vue-router'
import graph from './components/graph-dag-chart.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'demo',
            component: graph
        },
        {
            path: '/graph',
            name: 'graph',
            component: graph
        }
    ]
})
