<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="图片" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 30px 0;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  justify-content: space-between;
}
.recommend-item img {
  width: 90%;
}
</style>
