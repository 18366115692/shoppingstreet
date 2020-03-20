<template>
  <div class="home-goods">
    <home-goods-item v-for="(item, index) in goods" :key="index" :goodsItem="item"/>
  </div>
</template>

<script>
import HomeGoodsItem from './homeGoodsItem'
export default {
  name: 'HomeGoods',
  props: {
    goods: {
      type: Array,
      default: []
    }
  },
  components: {
    HomeGoodsItem
  }
}
</script>

<style scoped>
.home-goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: .2rem .7%;
}
</style>