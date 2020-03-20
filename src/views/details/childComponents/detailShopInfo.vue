<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo">
      <span class="title">{{ shop.name }}</span>
    </div>
    <div class="shop-center">
      <div class="shop-center-item shop-center-left">
        <div class="shop-sells count">
          <div class="sells-count">
            {{ shop.sells | sellCountFilter }}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="goods-info count">
          <div class="goods-count">
            {{ shop.goodsCount }}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-center-item shop-center-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{ item.score }}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{ item.isBetter ? '高' : '低' }}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop"><a :href="shop.allGoods">进店逛逛</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    sellCountFilter(val) {
      if (val < 10000) return val;
      return (val / 10000).toFixed(1) + '万'
    }
  }
}
</script>

<style scoped>
  .shop-info {
    padding: .5rem .16rem;
    border-bottom: .08rem solid #eee;
  }

  .shop-top img {
    width: .8rem;
    height: .8rem;
    display: inline-block;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, .2);
  }

  .title {
    margin-left: .2rem;
    font-size: .32rem;
  }

  .shop-center {
    display: flex;
    padding: .2rem 0;
    height: 1.6rem;
  }

  .shop-center-item {
    flex: 1
  }

  .shop-center-left {
    display: flex;
    text-align: center;
    padding: .2rem 0;
  }

  .shop-center-left .count {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .sells-count,
  .goods-count {
    font-weight: 600;
    font-size: .32rem;
  }

  .sells-text,
  .goods-text{
    font-size: .24rem;
  }

  .goods-info {
    border-right: .02rem solid rgba(0, 0, 0, .1);
  }

  .shop-center-right {
    position: relative;
  }

  .shop-center-right table {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 2.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .shop-center-right tr {
  }

  .shop-center-right td {
    font-size: .24rem;
    display: inline-block;
    margin: 0 .12rem;
  }

  .score {
    width: .48rem;
    color: #5ea732;
  }

  .score-better {
    color: #f13e3a;
  }

  .better {
    color: #fff;
    background-color: #5ea732;
  }

  .better-more {
    background-color: #f13e3a;
  }

  .shop-bottom {
    width: 100%;
    padding: .2rem 0;
  }

  .enter-shop {
    margin: 0 auto;
    width: 48%;
    background-color: #EAECEF;
    padding: .1rem 0;
    border-radius: .24rem;
    text-align: center;
  }

  .enter-shop a {
    color: rgba(0, 0, 0, .8);
  }
</style>