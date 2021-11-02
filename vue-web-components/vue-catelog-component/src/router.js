import Vue from 'vue'
import Router from 'vue-router'
import test from './views/test.vue'
import myDataTable from './components/panel/my-data-table.vue'
import menu from './components/panel/menu.vue'
import subscribeTable from './components/panel/data-list-table.vue'
import dataListDetail from './components/panel/data-list-detail.vue'
import viewJson from './components/panel/view-json.vue'
import project from './components/panel/project-list.vue'
import dataListHome from './components/panel/data-list-home.vue'
import uploadDataset from './components/panel/upload-dataset.vue'
import selectFile from './components/panel/select-file.vue'
// import fileContent from './components/panel/file-content.vue'
import nextDialog from './components/panel/next-dialog.vue'
import excelColumnClean from './components/panel/excel-column-clean'
import clearDatasetDialog from './components/panel/clear-dataset-dialog.vue'
import createTagsDialog from './components/panel/create-tags-dialog.vue'

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
            path: '/data-list-table',
            name: 'subscribeTable',
            component: subscribeTable
        },
        {
            path: '/data-list-detail',
            name: 'dataListDetail',
            component: dataListDetail
        },
        {
            path: '/view-json',
            name: 'viewJson',
            component: viewJson
        },

        {
            path: '/project',
            name: 'project',
            component: project
        },
        {
            path: '/data-list-home', 
            name: 'dataListHome',
            component: dataListHome
        },
        {
            path: '/upload-dataset',
            name: 'uploadDataset',
            component: uploadDataset
        },
        {
            path: '/select-file', 
            name: 'selectFile',
            component: selectFile
        },
        {
            path: '/next-dialog', 
            name: 'nextDialog',
            component: nextDialog
        },
        {
            path: '/excel-column-clean',
            name: 'excelColumnClean',
            component: excelColumnClean
        },
        {
            path: '/clear-dataset-dialog',
            name: 'clearDatasetDialog',
            component: clearDatasetDialog
        },
        {
            path:'/create-tags-dialog',
            name:'createTagsDialog',
            component:createTagsDialog
        }
    ]
})
