<template>
  <div class="sub-scroll">
    <ul class="item-container">
      <li v-for="item in subCategoryList" :key="item.acm">
        <img :src="item.image" alt="" />
        <p>
          {{ item.title }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SubCategory',
  props: {
    subCategoryList: {
      type: Array,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="less" scoped>
.sub-scroll {
  width: 100%;
  position: relative;
}
.item-container {
  width: 100%;
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  li {
    text-align: center;
    margin-top: 30px;
    img {
      width: 50px;
    }
    p {
      margin-top: 10px;
      font-size: 15px;
    }
  }
}
</style>
