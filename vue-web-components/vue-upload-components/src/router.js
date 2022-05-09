import Vue from 'vue'
import Router from 'vue-router'
import bpExcelHandler from './components/bp-excel-handler'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/bp-handler',
            name: 'bpExcelHandler',
            component: bpExcelHandler
        }
    ]
})
