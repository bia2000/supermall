<template>
  <el-carousel :interval="3000" arrow="always" height="196px">
    <el-carousel-item v-for="item in banners" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt />
      </a>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    banners: {
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
  width: 100%;
}
</style>
