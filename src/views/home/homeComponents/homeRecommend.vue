<template>
  <div class="HomeRecommend">
    <div class="recommendItem" v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" />
        <div class="title">{{ item.title }}</div>
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
      }
    }
  }
}
</script>

<style scoped>
.HomeRecommend {
  position: relative;
  height: 0;
  overflow: hidden;
  padding-bottom: 2.34rem;
  display: flex;
  width: 100%;
  text-align: center;
  border-bottom: .2rem solid #eee;
}
.recommendItem {
  flex: 1;
  width: 20%;
  padding: .2rem .1rem .2rem
}

.recommendItem img {
  width: 100%;
  margin-bottom: .1rem;
}

.recommendItem .title {
  color: #000;
  font-size: .24rem;
}
</style>