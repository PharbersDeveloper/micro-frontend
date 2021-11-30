import Vue from 'vue'
import Router from 'vue-router'
import phCodeditor from './components/ph-codeditor'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/phCodeditor',
            name: 'phCodeditor',
            component: test
        }
    ]
})
