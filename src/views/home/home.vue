<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      :titles="titles"
      @tabClick="tab_Click"
      class="tabFixed"
      ref="tabControl1"
      v-show="isTabFixed"
    ></tab-control>
    <Scroll
      class="wrapper"
      ref="scroll"
      :probeType="3"
      :scrollEnd="true"
      @scrolly="contentScroll"
      @pullUp="loadMore"
      ><home-swiper :banners="banners"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <Feature></Feature>
      <tab-control
        :titles="titles"
        @tabClick="tab_Click"
        ref="tabControl2"
      ></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list
    ></Scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import TabControl from '@/components/common/tabcontrol/TabControl.vue'
import GoodsList from '@/components/content/goods/goodsList.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import BackTop from '@/components/content/backtop/BackTop.vue'

import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecommend from './childComps/HomeRecommend.vue'
import Feature from './childComps/Feature.vue'
import { getHomeMultidata, getHomeGoods } from '@/apis/home'
import { debounce } from '@/common/utils'
export default {
  name: 'home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ['流行', '新款', '精选'],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: 'pop',
      isShow: false,
      isTabFixed: false,
      tabOffsetTop: 0,
    }
  },
  created() {
    // 请求多个数据
    this.getHomeMultidata()
    // 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    // 监听图片加载完成
    this.$bus.$on('itemImageLoad', () => {
      // console.log(this.$refs.scroll.refresh)
      // this.$refs.scroll && this.$refs.scroll.refresh()
      refresh()
    })
  },
  updated() {
    // 获取tabcontrol的offset
    this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    console.log(this.tabOffsetTop)
  },
  methods: {
    // 网络请求
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.finishPullUp()
      })
    },
    // 事件监听
    tab_Click(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    contentScroll(position) {
      // 判断backTop是否显示
      this.isShow = position.y < -1000
      // 判断tabcontrol是否吸顶
      this.isTabFixed = -position.y > this.tabOffsetTop
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
      // this.$refs.scroll.scroll.refresh()
    },
  },
}
</script>
<style scoped>
#home {
  padding: 44px 0 44px 0;
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 19;
}
.home-nav img {
  height: 100vh;
  width: 300px;
}
.tabFixed {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  background-color: #fff;
}
.wrapper {
  /* height: 100vh; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
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
