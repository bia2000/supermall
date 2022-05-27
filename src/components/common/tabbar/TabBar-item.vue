<template>
  <div class="tab-bar-item" @click="ItemClick">
    <!-- 如果活跃则变红 -->
    <slot name="item-icon" v-if="!isactive"></slot>
    <slot name="item-icon-active" v-else></slot>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String, //路径
    activeColor: {
      //颜色
      type: String,
      default: 'red',
    },
  },
  data() {
    return {
      // isactive: false,
    }
  },
  computed: {
    // /home -> item1(/home) = true
    // /home -> item1(/category) = false
    // /home -> item1(/cart) = false
    // /home -> item1(/profile) = false
    // indexOf()返回某个指定的字符串值在字符串中首次出现的位置。  == -1 说明不存在
    isactive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    // 根据传进来的值activeColor 给文字动态绑定style
    activeStyle() {
      return this.isactive ? { color: this.activeColor } : {}
    },
  },
  methods: {
    ItemClick() {
      this.$router.replace(this.path)
    },
  },
}
</script>

<style scoped>
/* 取消默认值 */
.tab-bar-item {
  text-align: center;
  flex: 1;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;

  /* 去掉图片与文字默认的间隔3px */
  vertical-align: middle;
  margin-bottom: 2px;
}
.style_red {
  color: red;
}
</style>
