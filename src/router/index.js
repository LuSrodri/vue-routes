import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import Users from '../Users.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
const Bar = { template: '<div>bar</div>' }

const routes = [
  {
    path: '/index',
    name: 'index',
    component: App
  }, {
    path: '/store',
    name: 'store',
    component: Bar
  }, {
    path: '/users',
    name: 'users',
    component: Users
  }, {
    path: '/support',
    name: 'support',
    component: Bar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
