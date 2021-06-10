import Vue from 'vue'
import Router from 'vue-router'
import demo from './views/demo.vue'
import home from './components/page/home.vue'
import max from './components/page/max.vue'
import rw from './components/page/rw.vue'
import consulting from './components/page/consulting.vue'
import aboutUs from './components/page/about-us.vue'
import reportList from './components/page/report-list.vue'
import downloadReport from './components/page/download-report.vue'
import activityList from './components/page/activity-list.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'demo',
            component: demo
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/max',
            name: 'max',
            component: max
        },
        {
            path: '/rw',
            name: 'rw',
            component: rw
        },
        {
            path: '/consulting',
            name: 'consulting',
            component: consulting
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: aboutUs
        },
        {
            path: '/report-list',
            name: 'report-list',
            component: reportList
        },{
            path: '/activity-list',
            name: 'activity-list',
            component: activityList
        },
        {
            path: '/download-report',
            name: 'download-report',
            component: downloadReport
>>>>>>>>> Temporary merge branch 2
        }
    ]
})
