import Vue from 'vue'
import Router from 'vue-router'
import map from './components/map-chart.vue'
import waterfull from './components/waterfull-chart.vue'
import heatmap from './components/heatmap-chart.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'map',
            component: map
        },
        {
            path: '/waterfull',
            name: 'waterfull',
            component: waterfull
        },
        {
            path: '/heatmap',
            name: 'heatmap',
            component: heatmap
        }
    ]
})
