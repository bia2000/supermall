<template>
  <div class="detail">
    <nav-bar class="detail-nav">
      <div slot="left" class="back" @click="backHomeClick">
        <img src="@/assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="titleItem"
          :class="{ active: currentIndex === index }"
          @click="itemClick(index)"
        >
          {{ item }}
        </div>
      </div></nav-bar
    >
    <scroll
      class="wrapper"
      ref="scroll"
      :scrollEnd="true"
      @scrolly="contentScroll"
      :probeType="3"
      ><detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detailInfo="detailInfo"
        @imgLoad="imgLoad"
      ></detail-goods-info>
      <detail-params-info
        ref="params"
        :goodsParams="goodsParam"
      ></detail-params-info>
      <detail-comment-info
        ref="comment"
        :rates="commentInfo"
      ></detail-comment-info>
      <goods-list ref="recommend" :goods="recommends"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
    <detail-buttom-bar @addCart="addToCart"></detail-buttom-bar>
    <!-- <toast :message="message" :show="show"></toast> -->
  </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import Scroll from '@/components/common/scroll/Scroll.vue'
import DetailParamsInfo from './childComps/DetailParamsInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import GoodsList from '@/components/content/goods/goodsList.vue'
import DetailButtomBar from './childComps/DetailButtomBar.vue'
// import Toast from '@/components/common/Toast/Toast.vue'
import { getDetail, Goods, Shop, GoodsParam, getRecommend } from '@/apis/detail'
import { itemListenerMixin, backTop } from '@/common/mixin'
import { mapActions } from 'vuex'
export default {
  components: {
    NavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
    DetailButtomBar,
    // Toast,
  },
  data() {
    return {
      iid: null,
      currentIndex: 0,
      titles: ['商品', '参数', '评论', '推荐'],
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      goodsParam: {},
      commentInfo: {},
      recommends: [],
      topicYs: [],
      // show: false,
      // message: '',
    }
  },
  mixins: [itemListenerMixin, backTop],
  created() {
    // 保存传入的iid
    this.iid = this.$route.params.iid
    // 根据iid请求数据
    getDetail(this.iid).then((res) => {
      const data = res.result
      // 获取顶部轮播图图片
      this.topImages = data.itemInfo.topImages
      // 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      )
      // 获取店铺信息
      this.shop = new Shop(data.shopInfo)
      // 获取商品详细信息
      this.detailInfo = data.detailInfo
      // 获取参数信息
      this.goodsParam = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      )
      // 获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
    })

    getRecommend().then((res) => {
      // console.log(res)
      this.recommends = res.data.list
    })
  },
  mounted() {
    // const refresh = debounce(this.$refs.scroll.refresh, 200)
    // // 监听图片加载完成
    // this.itemImgListener = () => {
    //   // console.log(this.$refs.scroll.refresh)
    //   // this.$refs.scroll && this.$refs.scroll.refresh()
    //   refresh()
    // }
    // this.$bus.$on('itemImageLoad', this.itemImgListener)
  },
  updated() {},
  destroyed() {
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  },
  computed: {},
  methods: {
    ...mapActions(['addCart']),
    itemClick(index) {
      this.currentIndex = index
      this.$refs.scroll.scrollTo(0, this.topicYs[index], 100)
    },
    backHomeClick() {
      this.$router.back()
    },
    imgLoad() {
      this.$refs.scroll.refresh()
      // 根据点击，拿到每个组件顶部的高度
      this.topicYs = []
      this.topicYs.push(0)
      this.topicYs.push(-this.$refs.params.$el.offsetTop)
      this.topicYs.push(-this.$refs.comment.$el.offsetTop)
      this.topicYs.push(-this.$refs.recommend.$el.offsetTop)
      // console.log(this.topicYs)
    },
    contentScroll(position) {
      this.backListner(position)
      const positiony = -position.y
      // console.log(positiony)
      let index = 0
      for (let i in this.topicYs) {
        if (this.currentIndex !== i && positiony >= -this.topicYs[i * 1 + 1]) {
          index++
        } else break
      }
      this.currentIndex = index
    },
    addToCart() {
      // 获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.price = this.goods.realPrice
      product.iid = this.iid
      // 将商品添加到购物车 (1.Promise,2.mapActions)
      // this.$store.dispatch('addCart', product).then((res) => {
      //   console.log(res)
      // })
      if (product.iid) {
        this.addCart(product).then((res) => {
          // this.show = true
          // this.message = res
          // // console.log(res)
          // setTimeout(() => {
          //   this.show = false
          // }, 1500)
          this.$toast.show(res, 1500)
        })
      }
    },
  },
}
</script>
<style scoped>
.detail-nav {
  background-color: #fff;
  /* position: relative; */
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 19;
}
.detail {
  position: relative;
  height: 100vh;
  padding-top: 44px;
  z-index: 99;
  background-color: #fff;
}
.wrapper {
  height: calc(100% - 44px - 49px);
  /* position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px; */
}
.title {
  display: flex;
  font-size: 14px;
}
.titleItem {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back {
  text-align: center;
}
.back img {
  vertical-align: middle;
}
</style>
