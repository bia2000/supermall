<template>
  <div class="shop-info" v-if="Object.keys(shop).length !== 0">
    <div class="shop-name">
      <img :src="shop.logo" alt="" />
      <span>{{ shop.name }}</span>
    </div>
    <div class="shop-desc">
      <div class="shop-left">
        <div class="sell">
          <div class="shop-sell">
            {{ shop.sells }}
          </div>
          <div class="shop-text">总销量</div>
        </div>
        <div class="count">
          <div class="goods-count">
            {{ shop.goodsCount }}
          </div>
          <div class="shop-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-right">
        <div v-for="index in shop.score.length" :key="index">
          <span>{{ shop.score[index - 1].name }}</span>
          <span class="shop-score">{{ shop.score[index - 1].score }}</span>
        </div>
      </div>
    </div>
    <button class="shop-into">进店逛逛</button>
  </div>
</template>
<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
<style scoped>
.shop-name {
  display: flex;
  margin: 30px 0 30px 0;
  align-items: center;
}
.shop-name img {
  margin: 0 10px 0 5px;
  width: 30px;
  height: 30px;
  border: 1px solid;
  border-radius: 50%;
}
.shop-text {
  font-size: 12px;
}
.shop-desc {
  display: flex;
}
.shop-left {
  display: flex;
  margin: 10px;
  width: 50%;
  border-right: 1px solid #eee;
  text-align: center;
}
.sell {
  margin: 0 10px 0 10px;
}
.sell .shop-sell {
  font-size: 18px;
}
.count {
  margin: 0 10px 0 10px;
}
.count .goods-count {
  font-size: 18px;
}
.shop-right {
  margin: 10px;
  width: 50%;
  font-size: 14px;
}
.shop-right .shop-score {
  margin: 0 10px 0 10px;
}
.shop-into {
  display: block;
  margin: 20px;
  width: 200px;
  height: 20px;
  font-size: 14px;
  color: #333;
  background-color: #e3e3e3;
  margin: 0 auto;
  border-radius: 10px;
  border: 1px solid #eee;
}
</style>
