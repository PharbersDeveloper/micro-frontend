import Vue from 'vue'
import Router from 'vue-router'
import map from './components/map-chart.vue'
import waterfull from './components/waterfull-chart.vue'
import heatmap from './components/heatmap-chart.vue'
import bubble from './components/bubble-chart.vue'
import perStacked from './components/per-stacked-chart.vue'
import mixLine from './components/mix-line-stacked-chart.vue'

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
        },
        {
            path: '/bubble',
            name: 'bubble',  
            component: bubble
        },
        {
            path: '/per',
            name: 'perStacked',
            component: perStacked
        },
        {
            path: '/mix',
            name: 'mixLine',
            component: mixLine
        }
    ]
})
