<template>
  <tab-bar>
    <!-- TabBarItem中的slot方便传入数据 -->
    <tab-bar-item path="/home" activeColor="deepPink"
      ><img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/home_a.svg"
        alt=""
      />
      <div slot="item-text">首页</div></tab-bar-item
    >

    <tab-bar-item path="/category" activeColor="deepPink"
      ><img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/category_a.svg"
        alt=""
      />
      <div slot="item-text">分类</div></tab-bar-item
    >
    <tab-bar-item path="/shopcart" activeColor="deepPink"
      ><img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/shopcart_a.svg"
        alt=""
      />
      <div slot="item-text">购物车</div></tab-bar-item
    >
    <tab-bar-item path="/proflie" activeColor="deepPink"
      ><img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/profile_a.svg"
        alt=""
      />
      <div slot="item-text">我的</div></tab-bar-item
    >
  </tab-bar>
</template>
<script>
import TabBar from '../common/tabbar/TabBar.vue'
import TabBarItem from '../common/tabbar/TabBar-item.vue'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem,
  },
}
</script>
