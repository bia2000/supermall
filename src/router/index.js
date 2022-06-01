import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = ()=>import('../views/home/home')
const Category = ()=>import('../views/category/category.vue')
const Shopcart = ()=>import('../views/shopcart/shopcart.vue')
const Proflie = ()=>import('../views/proflie/proflie.vue')
const Detail = ()=>import('../views/detail/Detail.vue')
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
  },
  {
    path:'/detail/:iid',
    component:Detail
  }
]
const router = new VueRouter({
  routes,
  mode:'history'
})
export default router
