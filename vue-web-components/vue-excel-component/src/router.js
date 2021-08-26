import Vue from 'vue'
import Router from 'vue-router'
import bpExcel from './components/bp-excel.vue'
import maxSaas from './components/max-saas-plat.vue'
import importFileList from './components/import-file-list.vue'
import customMapping from './components/custom-mapping.vue'
import test from './views/test.vue'
import manualCleaning from './components/page/manual-cleaning.vue'
import nav from './components/bp-nav-top.vue'

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
            path: '/max-saas',
            name: 'maxSaas',
            component: maxSaas
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
        },
        {
            path: '/nav',
            name: 'nav',
            component: nav
        }
    ]
})
