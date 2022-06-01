<template>
  <div class="buttom-bar">
    <div class="left">
      <div><i class="icon servicer"></i><span>客服</span></div>
      <div><i class="icon shop"></i><span>店铺</span></div>
      <div><i class="icon shou"></i><span>收藏</span></div>
    </div>
    <div class="right">
      <div class="car">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailButtomBar',
}
</script>
<style lang="less" scoped>
.buttom-bar {
  position: fixed;
  height: 49px;
  background-color: #fff;
  bottom: 0;
  left: 0;
  right: 0;
  .left {
    display: flex;
    width: 40%;
    justify-content: space-around;
    .icon {
      display: block;
      width: 22px;
      height: 22px;
      margin: 7px auto 3px;
      background: url('@/assets/img/detail/detail_bottom.png') 0 0/100%;
    }
    .servicer {
      background-position: 0 -54px;
    }
    .shop {
      background-position: 0 -98px;
    }
  }
  .right {
    display: flex;
    text-align: center;
    width: 60%;
    .car {
      // width: 100px;
      width: 70%;
      height: 49px;
      line-height: 49px;
      font-weight: 600;
      background-color: yellow;
    }
    .buy {
      width: 30%;
      // width: 60px;
      height: 49px;
      line-height: 49px;
      font-weight: 600;
      background-color: red;
      color: #fff;
    }
  }
}
</style>
