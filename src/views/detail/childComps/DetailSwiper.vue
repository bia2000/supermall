<template>
  <el-carousel :interval="3000" arrow="always" height="320px">
    <el-carousel-item v-for="item in topImages" :key="item.index">
      <img :src="item" alt />
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  name: 'DetailSwiper',
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
<style scoped>
img {
  height: 100%;
  width: 100%;
}
</style>
