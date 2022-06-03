import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Carousel,CarouselItem} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import toast from '@/components/common/Toast'
import FastClick from 'fastclick'
import LazyLoad from 'vue-lazyload'
Vue.config.productionTip = false
// 添加总线对象
Vue.prototype.$bus=new Vue()

// 解决移动端300ms延迟
FastClick.attach(document.body)
// 使用懒加载
Vue.use(LazyLoad,{
  // 占位图
  loading: require('@/assets/img/common/placeholder.png')
})

// 使用吐司插件
Vue.use(toast)
Vue.use(Carousel)
Vue.use(CarouselItem)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
