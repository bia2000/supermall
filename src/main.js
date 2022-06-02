import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Carousel,CarouselItem} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import toast from '@/components/common/Toast'

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
Vue.use(toast)
Vue.use(Carousel)
Vue.use(CarouselItem)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
