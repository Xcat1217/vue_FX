import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import News from '../views/News.vue'
import Ours from '../views/Ours.vue'
import Parter from '../views/Parter.vue'
import Products from '../views/Products.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home,
    redirect: '/index',
    children: [
      { path: '/index', component: Index },
      { path: '/news', component: News },
      { path: '/ours', component: Ours },
      { path: '/parter', component: Parter },
      { path: '/product', component: Products }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 解决重复点击路由的报错问题
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (location) {
  return originalReplace.call(this, location).catch(err => err)
}
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
