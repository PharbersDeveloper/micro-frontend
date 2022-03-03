import Vue from 'vue'
import Router from 'vue-router'
import insight from "./components/insight-container"

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/insight',
            name: 'insight',
            component: insight
        }
    ]
})
