import Vue from 'vue'
import Router from 'vue-router'
import bpExcel from './components/bp-excel.vue'
import maxSaasTable from './components/max-saas-table.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'bpExcel',
            component: bpExcel
        },
        {
            path: '/max-saas-table',
            name: 'maxSaasTable',
            component: maxSaasTable
        }
    ]
})
