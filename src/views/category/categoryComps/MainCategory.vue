<template>
  <div class="main-scroll">
    <div class="main-category">
      <ul>
        <li
          v-for="(item, index) in categoryList"
          :key="item.maitKey"
          @click="change(index, item.maitKey)"
          :class="{ active: index === currentIndex }"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainCategory',
  props: {
    categoryList: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  created() {
    // TODO 延迟三秒发送事件，防止 data 此时还未得到数据
    setTimeout(() => {
      this.$emit('change', this.categoryList[0].maitKey)
    }, 300)
  },
  methods: {
    change(index, key) {
      this.currentIndex = index
      this.$emit('change', key)
    },
  },
}
</script>

<style lang="less" scoped>
.active {
  // color: @color-tint;
  background-color: #f4f4f4;
}
.main-scroll {
  border-right: 1px solid #ddd;
  height: calc(100vh - 70px);
}
.main-category {
  overflow: hidden;
  text-align: center;
  ul li {
    height: 40px;
    width: 100%;
    line-height: 40px;
    font-size: 18px;
  }
}
</style>
