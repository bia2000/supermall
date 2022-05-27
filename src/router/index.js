import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = ()=>import('../views/home/home')
const Category = ()=>import('../views/category/category.vue')
const Shopcart = ()=>import('../views/shopcart/shopcart.vue')
const Proflie = ()=>import('../views/proflie/proflie.vue')
Vue.use(VueRouter)


const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/shopcart',
    component:Shopcart
  },
  {
    path:'/proflie',
    component:Proflie
  }
]
const router = new VueRouter({
  routes,
  mode:'history'
})
export default router
