import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'

Vue.use(VueRouter)

var router = new VueRouter({ 
    routes, // short for routes: routes
    linkActiveClass:'active'
})

// export the router instance
export default router