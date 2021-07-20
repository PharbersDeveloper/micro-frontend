import Vue from 'vue'
import Router from 'vue-router'
import test from './views/test.vue'
import myDataTable from './components/panel/my-data-table.vue'
import menu from './components/panel/menu.vue'
import subscribeTable from './components/panel/subscribe-table.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'test',
            component: test
        },
        {
            path: '/my-data-table',
            name: 'myDataTable',
            component: myDataTable
        },
        {
            path: '/menu',
            name: 'menu',
            component: menu
        },
        {
            path: '/sub-table',
            name: 'subscribeTable',
            component: subscribeTable
        }
    ]
})
