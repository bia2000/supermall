<template>
  <div class="proflieuser">
    <div class="top">
      <img src="../../../assets/img/profile/avatar.svg" alt="" />
      <div class="username">
        {{ username }}
      </div>
      <!-- <span>我的足迹</span> -->
    </div>
    <div class="number">
      <div class="money">
        <div class="style_red">{{ money }}元</div>
        <div>我的余额</div>
      </div>
      <div class="discount">
        <div class="style_red">{{ discount }}个</div>
        <div>我的优惠</div>
      </div>
      <div class="points">
        <div class="style_red">{{ points }}分</div>
        <div>我的积分</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProfileUser',
  props: {
    username: {
      type: String,
      default() {
        return '登录/注册'
      },
    },
    money: {
      type: Number,
      default() {
        return 0.0
      },
    },
    discount: {
      type: Number,
      default() {
        return 0
      },
    },
    points: {
      type: Number,
      default() {
        return 0
      },
    },
  },
}
</script>
<style lang="less" scoped>
.proflieuser {
  border-bottom: 10px solid #eee;
  .top {
    height: 100px;
    line-height: 100px;
    padding: 10px;
    vertical-align: middle;
    background-color: var(--color-high-text);
    img {
      margin: 10px;
      height: 100%;
    }
    .username {
      height: 80%;
      color: #fff;
      font-size: 20px;
      vertical-align: top;
      display: inline-block;
    }
  }
  .number {
    height: 100px;
    display: flex;
    text-align: center;
    font-size: 18px;
    align-items: center;
    justify-content: space-around;
  }
}
.style_red {
  color: var(--color-high-text);
}
</style>
