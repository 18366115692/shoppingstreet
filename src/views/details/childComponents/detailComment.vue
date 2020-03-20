<template>
  <div class="comment-container" v-if="Object.keys(commentInfo).length !== 0">
    <div class="comment-title">
      <div class="left">
        用户评价
      </div>
      <div class="right">
        更多
        <i class="iconfont">&#xe60d;</i>
      </div>
    </div>
    <div class="comment-username">
      <img :src="commentInfo.user.avatar">
      <span class="name">{{ commentInfo.user.uname }}</span>
    </div>
    <div class="comment-content">
      <div class="info">
        {{ commentInfo.content }}
      </div>
      <div class="specs">
        <span class="specs-time">{{ commentInfo.created | filterTime }}</span>
        <span class="specs-style">{{ commentInfo.style }}</span>
      </div>
    </div>
    <div class="buying-show">
      <div v-for="(item, index) in commentInfo.images" :key="index">
        <img :src="item">
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from 'common/tool'

export default {
  name: 'DetailComment',
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    filterTime(val) {
      // 1. 获取时间戳
      const date = new Date(val * 1000);
      // 进行过滤
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
  .comment-container {
    padding: .2rem;
    border-bottom: .1rem solid #eee;
  }

  .comment-title {
    height: 1rem;
    line-height: 1rem;
    border-bottom: .02rem solid rgba(0, 0, 0, .2);
    /* padding-bottom: .2rem; */
  }

  .comment-title .left {
    font-size: .36rem;
  }

  .comment-username {
    padding: .2rem 0;
  }

  .comment-username img {
    width: .8rem;
    height: .8rem;
    display: inline-block;
    border-radius: 50%;
    overflow: hidden;
    border: .02rem solid rgba(0, 0, 0, .1);
  }

  .comment-username .name {
    margin-left: .2rem;
    font-size: .32rem;
  }

  .comment-content .info {
    line-height: .6rem;
  }

  .comment-content .specs {
    line-height: .6rem;
    font-size: .26rem;
    color: #aaa;
  }

  .specs-time {
    margin-right: .2rem;
  }

  .buying-show {
    display: flex;
  }

  .buying-show div {
    width: 2rem;
    height: 2rem;
    overflow: hidden;
    margin-right: .08rem;
  }

  .buying-show img {
    width: 100%
  }
</style>