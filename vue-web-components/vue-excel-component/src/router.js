import Vue from 'vue'
import Router from 'vue-router'
import bpExcel from './components/bp-excel.vue'
import maxSaasTable from './components/max-saas-table.vue'
import importFileList from './components/import-file-list.vue'
import customMapping from './components/custom-mapping.vue'

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
        },
        {
            path: '/import-file-list',
            name: 'importFileList',
            component: importFileList
        },
        {
            path: '/custom-mapping',
            name: 'customMapping',
            component: customMapping
        }
    ]
})
