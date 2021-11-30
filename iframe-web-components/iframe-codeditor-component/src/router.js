import Vue from 'vue'
import Router from 'vue-router'
import phCodeditor from './components/ph-codeditor-page'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'phCodeditor',
            component: test
        }
    ]
})
