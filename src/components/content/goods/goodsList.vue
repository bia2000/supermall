<template>
  <div class="goods">
    <div v-for="item in goods" :key="item.index" class="goods-item">
      <a :href="item.link">
        <img :src="item.show.img" alt="" @load="imgLoad" />
        <div>
          <p>{{ item.title }}</p>
          <span>{{ item.price }}</span>
          <span>{{ item.cfav }}</span>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'goodsList',
  props: {
    goods: {
      type: Array,
      default() {
        return []
      },
    },
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('itemImageLoad')
    },
  },
}
</script>
<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  text-align: center;
  justify-content: space-around;
}
.goods-item {
  flex: 1;
  /* height: 250px; */
  width: calc((100%-5px) / 2);
  min-width: calc((100%-5px) / 2);
  max-width: calc((100%-5px) / 2);
}
.goods-item :nth-child(odd) {
  padding-right: 5px;
}
.goods-item img {
  height: 270px;
  width: 100%;
  border-radius: 8px;
}
.goods-item p {
  width: 90%;
  margin: 0 auto;
  font-size: 14px;
  text-overflow: ellipsis; /* 文本溢出时显示省略号来代表被修剪的文本 */
  white-space: nowrap; /* 段落中的文本不进行换行 */
  overflow: hidden; /* 溢出部分隐藏 */
}
.goods-item span {
  font-size: 14px;
}
.goods-item div :nth-child(2n) {
  margin-right: 20px;
  color: red;
}
.goods-item div :nth-child(3n) {
  position: relative;
}
.goods-item div :nth-child(3n)::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url('../../../assets/img/common/collect.svg') 0 0/14px 14px;
}
</style>
