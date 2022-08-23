import Vue from 'vue'
import Router from 'vue-router'
import codeditor from './components/container.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/codeditor',
            name: 'codeditor',
            component: codeditor
        }
    ]
})
