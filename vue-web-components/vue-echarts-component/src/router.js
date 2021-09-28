import Vue from 'vue'
import Router from 'vue-router'
import map from './components/map.vue'
import maps from './components/page/map.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'map',
            component: map
        },{
            path: '/maps',
            name: 'maps',
            component: maps
        }
    ]
})
