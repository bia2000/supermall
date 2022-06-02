<template>
  <div class="shopcart">
    <nav-bar class="home-nav"
      ><div slot="center">购物车({{ cartLength }})</div></nav-bar
    >
    <car-buttom-bar></car-buttom-bar>
    <cart-list></cart-list>
  </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import { mapGetters } from 'vuex'
import CartList from './childComps/CartList.vue'
import CarButtomBar from './childComps/CarButtomBar.vue'
export default {
  name: 'shopcart',
  components: {
    NavBar,
    CartList,
    CarButtomBar,
  },
  computed: {
    ...mapGetters(['cartList', 'cartLength']),
    // carLength() {
    //   return this.$store.state.cartList.length
    // },
  },
}
</script>
<style scoped>
.shopcart {
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  font-weight: 600;
  left: 0;
  right: 0;
  top: 0;
  z-index: 19;
}
</style>
