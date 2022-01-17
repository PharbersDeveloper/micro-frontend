import Vue from 'vue'
import Router from 'vue-router'
import maxSaas from './components/deprecated/page/max-saas-plat.vue'
import importFileList from './components/import-file-list.vue'
import customMapping from './components/custom-mapping.vue'
import manualCleaning from './components/deprecated/page/manual-cleaning.vue'
import entryReplacement from './components/deprecated/max-entry-replacement.vue'
import nav from './components/bp-nav-top-max.vue'
import importPage from './components/deprecated/page/max-saas-import.vue'
import bpExcelContainer from './components/bp-excel-container'
import bpNavMax from './components/bp-nav-top-max'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'bpExcelContainer',
            component: bpExcelContainer
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
            path: '/bp-container',
            name: 'bpExcelContainer',
            component: bpExcelContainer
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
        },
        {
            path: '/entry-replacement',
            name: 'entryReplacement',
            component: entryReplacement
        },
        {
            path: '/max-saas-import',
            name: 'max-saas-import',
            component: importPage
        },
        {
            path: '/bp-nav-max',
            name: 'bp-nav-max',
            component: bpNavMax
        }
    ]
})