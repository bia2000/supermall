<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <Feature></Feature>
    <tab-control :titles="titles" class="tab-control"></tab-control>
    <ul>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
      <li>dd</li>
    </ul>
  </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import TabControl from '@/components/common/tabcontrol/TabControl.vue'

import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecommend from './childComps/HomeRecommend.vue'
import Feature from './childComps/Feature.vue'
import { getHomeMultidata } from '@/apis/home'
export default {
  name: 'home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    Feature,
    TabControl,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ['流行', '新款', '精选'],
    }
  },
  created() {
    // 请求多个数据
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  },
}
</script>
<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.home-nav img {
  width: 100%;
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
