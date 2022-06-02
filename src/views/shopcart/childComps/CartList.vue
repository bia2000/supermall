<template>
  <div class="cart-list">
    <!-- <div v-for="(item, index) in cartList" :key="index" class="cart">
      <div class="check">
        <div @click="check">
          <img src="@/assets/img/cart/yes.svg" alt="" v-show="item.checked" />
        </div>
      </div>
      <div @click="toDetail" class="img-box">
        <img :src="item.image" alt="" />
      </div>
      <div class="info-box">
        <div class="title text-more">{{ item.title }}}</div>
        <div class="price">
          <div>￥{{ item.price }}</div>
          <div>x{{ item.count }}</div>
        </div>
      </div>
    </div> -->
    <cart-list-item
      v-for="item in cartList"
      :goods="item"
      :key="item.iid"
    ></cart-list-item>
  </div>
</template>
<script>
import CheckButton from '@/components/content/checkbutton/CheckButton.vue'
import { mapGetters } from 'vuex'
import CartListItem from './CartListItem.vue'
export default {
  components: { CheckButton, CartListItem },
  name: 'CartList',
  computed: {
    ...mapGetters(['cartLength', 'cartList']),
  },
  methods: {
    // toDetail() {
    //   this.$router.push('/detail/' + this.cartList.iid)
    // },
    // check() {
    //   // this.goods.checked = !this.goods.checked
    //   // console.log(this.goods.checked)
    //   this.$store.dispatch('check', this.c)
    // },
  },
}
</script>
<style lang="less" scoped>
.cart-list {
  margin: 44px 0 200px 0;
}
.cart {
  margin-top: 44px;
  display: flex;
  padding: 10px;
  // word-break: break-all;
  // white-space: normal;
  .check {
    width: 50px;
    position: relative;
    div {
      height: 26px;
      width: 26px;
      border-radius: 26px;
      outline: 1px solid #ccc;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      margin-left: 6px;
      img {
        width: 26px;
      }
    }
  }
  .img-box {
    height: 110px;
    overflow: hidden;
    border-radius: 10px;
    img {
      width: 90px;
    }
  }
  .info-box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 10px;
    width: 195px;
    .title {
      font-size: 20px;
      color: #444;
    }
    .desc {
      font-size: 16px;
      color: #555;
    }
  }
  .price {
    font-size: 21px;
    div:nth-child(1) {
      float: left;
      color: #f86024;
    }
    div:nth-child(2) {
      float: right;
    }
  }
}
</style>
