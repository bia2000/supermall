<template>
  <div class="proflielist">
    <div class="fuc" v-for="item in message" :key="item.index">{{ item }}</div>
  </div>
</template>
<script>
export default {
  name: 'ProflieList',
  props: {
    message: {
      type: Array,
      default() {
        return ['我的信息', '积分商城', '会员卡', '我的订单', '官方客服']
      },
    },
  },
}
</script>
<style scoped>
.fuc {
  height: 40px;
  line-height: 40px;
  margin-left: 10px;
  border-bottom: 1px solid #e3e3e3;
}
</style>
