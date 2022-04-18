import Vue from 'vue'
import Router from 'vue-router'
import importFileList from './components/import-file-list.vue'
import customMapping from './components/custom-mapping.vue'
import nav from './components/bp-nav-top-max.vue'
import bpExcelContainer from './components/bp-excel-container'
import bpExcelHandler from './components/bp-excel-handler'
import bpNavMax from './components/bp-nav-top-max'
import eh from './components/bp-excel-handler'
import dataList from './components/data-list-home'
import dashboards from './components/dashboards'
import datasets from './components/upload-dataset'
import prepare from './components/bp-prepare-container'
import executionHistory from './components/bp-executions-history'
import test from './components/test'

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
            path: '/test',
            name: 'test',
            component: test
        },
        {
            path: '/datasets',
            name: 'datasets',
            component: datasets
        },
        {
            path: '/prepare',
            name: 'prepare',
            component: prepare
        },
        {
            path: '/data-list',
            name: 'dataList',
            component: dataList
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
            path: '/bp-handler',
            name: 'bpExcelHandler',
            component: bpExcelHandler
        },
        {
            path: '/nav',
            name: 'nav',
            component: nav
        },
        {
            path: '/bp-nav-max',
            name: 'bp-nav-max',
            component: bpNavMax
        },
        {
            path: '/eh',
            name: 'eh',
            component: eh
        },
        {
            path: '/dashboards',
            name: 'dashboards',
            component: dashboards
        },
        {
            path: '/executions',
            name: 'executions',
            component: executionHistory
        }
    ]
})
