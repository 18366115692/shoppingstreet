<template>
  <div class="top-container" v-if="Object.keys(goods).length !== 0">
    <div class="title">{{ goods.title }}</div>
    <div class="center">
      <span class="newPrice">{{ goods.newPrice }}</span>
      <span class="oldPrice">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="bottom">
      <span class="sales">{{ goods.columns[0] }}</span>
      <span class="likes">{{ goods.columns[1] }}</span>
      <span class="logisticsInfo">{{ goods.serveices[serveicesList].name }}</span>
    </div>
    <div class="serveice">
      <span class="serveice-item" v-for="index in serveicesList" :key="index">
        <img :src="goods.serveices[index].icon">
        <span>{{ goods.serveices[index].name }}</span>
      </span>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'DetailTop',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    serveicesList() {
      return this.goods.serveices.length-1
    }
  }
}
</script>

<style scoped>
  .top-container {
    padding: .2rem;
  }
  .title {
    color: #222;
    font-size: .32rem;
    margin-bottom: .2rem;
  }

  .center {
    position: relative;
  }
  .newPrice {
    color: var(--color-high-text);
    font-size: .48rem;
    margin-right: .1rem;
  }
  .oldPrice {
    color: var(--color-text);
    text-decoration: line-through;
  }
  .discount {
    display: inline-block;
    padding: .06rem;
    background-color: var(--color-high-text);
    color: #fff;
    margin-left: .1rem;
    font-size: .24rem;
    border-radius: .2rem;
    position: absolute;
    top: 0;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    color: var(--color-text);
    font-size: .24rem;
    padding-top: .4rem;
    padding-bottom: .2rem;
    border-bottom: .02rem solid rgba(0, 0, 0, 0.1);
  }

  .serveice {
    display: flex;
    justify-content: space-between;
    line-height: 1.2rem;
  }
  .serveice-item img {
    width: .24rem;
    height: .24rem;
    position: relative;
    top: -0.02rem;
  }
  .serveice-item span {
    font-size: .24rem;
    color: #333;
  }
</style>