import Vue from 'vue'
import Router from 'vue-router'
import test from './views/test.vue'
import myDataTable from './components/panel/my-data-table.vue'

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
        }
    ]
})
