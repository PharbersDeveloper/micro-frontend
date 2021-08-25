import Vue from 'vue'
import Router from 'vue-router'
import bpExcel from './components/bp-excel.vue'
import maxSaasTable from './components/max-saas-table.vue'
import importFileList from './components/import-file-list.vue'
import customMapping from './components/custom-mapping.vue'
import test from './views/test.vue'
import manualCleaning from './components/page/manual-cleaning.vue'

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
        },
        {
            path: '/bp-excel',
            name: 'bpExcel',
            component: bpExcel
        },
        {
            path: '/manual-cleaning',
            name: 'manualCleaning',
            component: manualCleaning
        }
    ]
})
