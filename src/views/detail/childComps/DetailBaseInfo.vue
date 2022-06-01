<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="real-price">￥{{ goods.realPrice }}</span>
      <span class="old-price">{{ goods.oldPrice }}</span>
      <span class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-columns">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[0].name }}</span>
    </div>
    <div class="services">
      <span
        v-for="index in goods.services.length - 1"
        :key="index"
        class="service-item"
      >
        <img :src="goods.services[index - 1].icon" />
        <span>{{ goods.services[index - 1].name }}</span></span
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
<style scoped>
.base-info {
}
.info-title {
  margin: 3%;
  font-size: 18px;
  font-weight: 500;
  width: 90%;
}
.info-price {
  margin: 3% 0 3% 0;
}
.real-price {
  padding: 0 3px 0 3px;
  font-size: 23px;
  color: var(--color-high-text);
}
.old-price {
  padding: 0 3px 0 3px;
  font-size: 12px;
  text-decoration: line-through;
}
.discount {
  display: inline-block;
  color: #fff;
  text-align: center;
  font-size: 12px;
  background-color: var(--color-high-text);
  border-radius: 7px;
}
.info-columns {
  display: flex;
  margin: 5px;
  font-size: 14px;
  justify-content: space-between;
}
.services {
  font-size: 14px;
  padding: 25px 0 25px 0;
  border-bottom: 5px solid #eee;
  display: flex;
  justify-content: space-between;
}
.services img {
  width: 10px;
  height: 10px;
}
</style>
