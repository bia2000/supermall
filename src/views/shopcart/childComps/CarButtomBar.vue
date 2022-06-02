<template>
  <div class="buttom-bar">
    <span class="check-all" @click="checkAll">
      <input type="checkbox" :checked="isSelectAll" class="checkbox" />
      <span> 全选</span>
    </span>
    <span class="total">
      <span>合计 </span>
      <span class="total-price">{{ totalPrice }}</span>
    </span>
    <span class="result">去结算({{ changeLength }})</span>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CarButtomBar',
  methods: {
    checkAll() {
      // if (this.isSelectAll) {
      //全部选中
      this.$store.dispatch('checkAll', this.cartList)
      // } else {
      //如果有未选中

      // }
    },
  },
  computed: {
    ...mapGetters(['cartLength', 'cartList']),
    totalPrice() {
      return (
        '￥' +
        this.cartList
          .filter((item) => {
            return item.checked
          })
          .reduce((preValue, item) => {
            return item.price * item.count + preValue
          }, 0)
          .toFixed(2)
      )
    },
    changeLength() {
      return this.cartList.filter((item) => item.checked).length
    },
    isSelectAll() {
      //如果购物车为空，不选中
      if (this.cartList.length === 0) return false
      // 如果购物车全部选中则选中，有未选的则不选中
      return !this.cartList.find((item) => !item.checked)
    },
  },
}
</script>
<style lang="less" scoped>
.buttom-bar {
  position: fixed;
  line-height: 40px;
  z-index: 99;
  height: 40px;
  bottom: 49px;
  left: 0;
  right: 0;
  background-color: #eee;
  .check-all {
    margin-left: 10px;
    .checkbox {
      border-radius: 10px;
      color: #fff;
      background: red;
    }
  }
  .total {
    margin: 0 20px;
    .total-price {
      margin: 0 5px;
    }
  }
  .result {
    float: right;
    width: 30%;
    height: 100%;
    background-color: rgb(230, 84, 11);
    color: #fff;
    border-radius: 20px;
    margin-right: 10px;
    text-align: center;
  }
}
</style>
