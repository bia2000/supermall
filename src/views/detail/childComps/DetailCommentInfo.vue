<template>
  <div class="comment" v-if="Object.keys(rates).length !== 0">
    <header>
      <span>用户评价({{ rates.isAnonymous }})</span>
      <a>更多</a>
    </header>
    <main>
      <section class="user">
        <img :src="rates.user.avatar" />
        <span>{{ rates.user.uname }}</span>
      </section>
      <section class="content-container">
        <p class="content">
          {{ rates.content }}
        </p>
        <div class="info">
          <span>{{ date(rates.created) }}</span>
          <span>
            {{ rates.style }}
          </span>
        </div>
        <div class="images">
          <img v-for="item in rates.images" :src="item" :key="item" />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { formatDate } from '@/common/utils'
export default {
  name: 'DetailCommentInfo',
  props: {
    rates: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {
    date(dtime) {
      // dtime *= 1000
      // let y = new Date(dtime).getFullYear()
      // let m = new Date(dtime).getMonth()
      // let d = new Date(dtime).getDate()
      // return [y, m, d].join('-')
      dtime = new Date(dtime * 1000)
      return formatDate(dtime, 'yyyy/MM/dd')
    },
  },
}
</script>

<style lang="less" scoped>
.comment {
  padding: 10px 10px;
  header {
    display: flex;
    font-size: 18px;
    color: #333;
    border-bottom: 1px solid #ddd;
    height: 60px;
    line-height: 60px;
    a {
      flex: 1;
      display: flex;
      flex-direction: row-reverse;
    }
  }
  main {
    li {
      border-bottom: 1px solid #ddd;
    }
    .user {
      padding: 10px 0;
      img {
        width: 50px;
        vertical-align: middle;
      }
      span {
        margin-left: 10px;
        font-size: 20px;
        color: #333;
      }
    }
    .content-container {
      .content {
        color: #333;
        font-size: 18px;
        padding: 10px 0;
      }
      .info {
        color: #888;
        font-size: 16px;
        padding: 10px 0;
      }
      .images {
        img {
          width: 80px;
        }
        img:nth-child(n + 2) {
          margin: 0 5px;
        }
      }
    }
  }
}
</style>
